import React, { FC } from 'react';
import { ResponsiveBar, Axis } from '@nivo/bar';

import { DataForTimeUnit, Message } from '../models';

const MAX_TICKS = 20;

type ChartProps = {
  senders: Message['sender'][];
  data: DataForTimeUnit[];
  colorMap: Record<Message['sender'], string>;
};

const Chart: FC<ChartProps> = ({ senders, data, colorMap }) => (
  <div style={{ height: 640 }}>
    <ResponsiveBar
      data={data}
      keys={senders}
      colors={senders.map(sender => colorMap[sender])}
      margin={{ top: 48, right: 48, bottom: 96, left: 72 }}
      enableLabel={false}
      axisBottom={{
        tickPadding: 8,
        tickRotation: -45,
        tickValues: getTimesToShowTicksFor(data),
      }}
      animate={false}
    />
  </div>
);

function getTimesToShowTicksFor(data: DataForTimeUnit[]): Axis['tickValues'] {
  return data.length > MAX_TICKS
    ? data
        .filter((_, index) => {
          const interval = Math.floor(data.length / MAX_TICKS);
          return index % interval === 0;
        })
        .map(({ id }) => id as string)
    : undefined;
}

export default Chart;
