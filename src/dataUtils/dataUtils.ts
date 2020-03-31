import { decode } from 'utf8';
import { groupBy, sortBy, orderBy, mapValues } from 'lodash';
import { format, startOfDay, startOfWeek, startOfMonth, startOfYear } from 'date-fns';

import { TimeUnit, Data, DataForTimeUnit, Message } from '../models';

const { DAY, WEEK, MONTH, YEAR } = TimeUnit;

export interface FileMessage {
  sender_name: string;
  content?: string;
  timestamp_ms: number;
}

export interface FileContent {
  messages: FileMessage[];
}

export async function getData(files: File[]): Promise<Data> {
  const promisesForMessages = Array.from(files).map(getMessages);
  const messages = (await Promise.all(promisesForMessages)).flat();

  return convertMessagesToData(messages);
}

export const emptyData: Data = {
  DAY: [],
  WEEK: [],
  MONTH: [],
  YEAR: [],
};

function convertMessagesToData(messages: Message[]): Data {
  return {
    DAY: convertMessagesToDataForTimeUnit(messages, DAY),
    WEEK: convertMessagesToDataForTimeUnit(messages, WEEK),
    MONTH: convertMessagesToDataForTimeUnit(messages, MONTH),
    YEAR: convertMessagesToDataForTimeUnit(messages, YEAR),
  };
}

async function getMessages(file: File): Promise<Message[]> {
  const content = await readJsonObjectFile(file);
  return content ? extractMessages(content as FileContent) : [];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function readJsonObjectFile(file: File): Promise<Record<string, any> | null> {
  const string = await readFile(file);
  return string ? JSON.parse(string) : null;
}

function readFile(file: File): Promise<string | null> {
  return new Promise(resolve => {
    const reader = new FileReader();

    // eslint-disable-next-line fp/no-mutation
    reader.onload = (event): void => {
      const result = event.target?.result;
      resolve(result ? result.toString() : null);
    };

    reader.readAsText(file);
  });
}

function extractMessages({ messages }: FileContent): Message[] {
  return messages.map(({ sender_name, content, timestamp_ms }) => ({
    sender: decode(sender_name),
    content: content ? decode(content) : null,
    time: timestamp_ms,
  }));
}

// TODO: Add items for time units without messages
function convertMessagesToDataForTimeUnit(
  messages: Message[],
  timeUnit: TimeUnit,
): DataForTimeUnit[] {
  const messagesByOldestFirst = sortBy(messages, 'time');
  const messagesGroupedByTime = groupMessagesByTime(messagesByOldestFirst, timeUnit);
  const sendersByMostMessagesFirst = getSendersByMostMessagesFirst(messagesByOldestFirst);

  return Object.entries(messagesGroupedByTime).map(([time, messagesForThatTime]) => {
    const numberOfMessagesBySender = getNumberOfMessagesBySender(messagesForThatTime);

    return {
      id: formatTime(Number(time), timeUnit),
      ...sendersByMostMessagesFirst.reduce(
        (result, sender) => ({
          ...result,
          [sender]: numberOfMessagesBySender[sender] || 0,
        }),
        {},
      ),
    };
  });
}

function getNumberOfMessagesBySender(messages: Message[]): Record<Message['sender'], number> {
  return mapValues(groupMessagesBySender(messages), messagesBySender => messagesBySender.length);
}

function groupMessagesByTime(messages: Message[], unit: TimeUnit): Record<string, Message[]> {
  const startOf: Record<TimeUnit, (time: number) => number> = {
    DAY: time => startOfDay(time).getTime(),
    WEEK: time => startOfWeek(time, { weekStartsOn: 1 }).getTime(),
    MONTH: time => startOfMonth(time).getTime(),
    YEAR: time => startOfYear(time).getTime(),
  };

  return groupBy(messages, ({ time }) => startOf[unit](time));
}

function getSendersByMostMessagesFirst(messages: Message[]): Message['sender'][] {
  return orderBy(
    Object.entries(getNumberOfMessagesBySender(messages)).map(([sender, numberOfMessages]) => ({
      sender,
      numberOfMessages,
    })),
    'numberOfMessages',
    'desc',
  ).map(({ sender }) => sender);
}

function groupMessagesBySender(messages: Message[]): Record<Message['sender'], Message[]> {
  return groupBy(messages, ({ sender }) => sender);
}

function formatTime(time: number, unit: TimeUnit): string {
  const formats: Record<TimeUnit, string> = {
    DAY: 'dd/MM/yyyy',
    WEEK: 'dd/MM/yyyy',
    MONTH: 'MMM yyyy',
    YEAR: 'yyyy',
  };
  const extras: Record<TimeUnit, string> = {
    DAY: '',
    WEEK: ' week',
    MONTH: '',
    YEAR: '',
  };

  return `${format(new Date(time), formats[unit])}${extras[unit]}`;
}
