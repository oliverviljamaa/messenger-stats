import { decode } from 'utf8';
import { groupBy, sortBy, orderBy, mapValues } from 'lodash';
import {
  format,
  startOfDay,
  startOfWeek,
  startOfMonth,
  startOfYear,
  eachDayOfInterval,
  eachWeekOfInterval,
  eachMonthOfInterval,
  eachYearOfInterval,
} from 'date-fns';

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
  senders: [],
  numberOfMessages: {
    DAY: [],
    WEEK: [],
    MONTH: [],
    YEAR: [],
  },
};

function convertMessagesToData(messages: Message[]): Data {
  const sortedMessages = sortMessagesByOldestFirst(messages);
  const senders = getSendersByMostMessagesFirst(messages);

  const convert = (unit: TimeUnit): DataForTimeUnit[] =>
    convertMessagesToDataForTimeUnit(sortedMessages, unit, senders);

  return {
    senders,
    numberOfMessages: {
      DAY: convert(DAY),
      WEEK: convert(WEEK),
      MONTH: convert(MONTH),
      YEAR: convert(YEAR),
    },
  };
}

function sortMessagesByOldestFirst(messages: Message[]): Message[] {
  return sortBy(messages, 'time');
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

function convertMessagesToDataForTimeUnit(
  messages: Message[],
  timeUnit: TimeUnit,
  senders: Message['sender'][],
): DataForTimeUnit[] {
  return getTimesWithMessages(messages, timeUnit).map(({ time, messages: messagesForThatTime }) => {
    const numberOfMessagesBySender = getNumberOfMessagesBySender(messagesForThatTime);

    return {
      id: formatTime(Number(time), timeUnit),
      ...senders.reduce(
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

function getTimesWithMessages(
  messages: Message[],
  unit: TimeUnit,
): { time: number; messages: Message[] }[] {
  const messagesGroupedByTime = groupMessagesByTime(messages, unit);
  const getInterval = getIntervalFn(messages, unit);

  return getInterval().map(date => ({
    time: date.getTime(),
    messages: messagesGroupedByTime[date.getTime()] || [],
  }));
}

function groupMessagesByTime(messages: Message[], unit: TimeUnit): Record<string, Message[]> {
  return groupBy(messages, ({ time }) => getStartTimeFn(unit)(time));
}

function getStartTimeFn(unit: TimeUnit): (time: number) => number {
  const fns: Record<TimeUnit, (time: number) => number> = {
    DAY: time => startOfDay(time).getTime(),
    WEEK: time => startOfWeek(time, { weekStartsOn: 1 }).getTime(),
    MONTH: time => startOfMonth(time).getTime(),
    YEAR: time => startOfYear(time).getTime(),
  };

  return fns[unit];
}

function getIntervalFn(messages: Message[], unit: TimeUnit): () => Date[] {
  if (messages.length === 0) {
    return (): Date[] => [];
  }

  const firstTime = messages[0].time;
  const lastTime = messages[messages.length - 1].time;

  const start = getStartTimeFn(unit)(firstTime);
  const end = lastTime;

  const fns: Record<TimeUnit, () => Date[]> = {
    DAY: () => eachDayOfInterval({ start, end }),
    WEEK: () => eachWeekOfInterval({ start, end }, { weekStartsOn: 1 }),
    MONTH: () => eachMonthOfInterval({ start, end }),
    YEAR: () => eachYearOfInterval({ start, end }),
  };

  return fns[unit];
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
