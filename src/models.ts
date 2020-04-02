import { BarItemProps } from '@nivo/bar';

export interface Message {
  sender: string;
  content: string | null;
  time: number;
}

export enum TimeUnit {
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

export type DataForTimeUnit = Pick<BarItemProps['data'], 'id'>;

export type Data = {
  senders: Message['sender'][];
  messages: Record<TimeUnit, DataForTimeUnit[]>;
};
