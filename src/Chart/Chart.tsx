import React, { FC } from 'react';
import { ResponsiveBar, Axis } from '@nivo/bar';

import { DataForTimeUnit } from '../models';

const MAX_TICKS = 20;

type ChartProps = {
  data: DataForTimeUnit[];
};

const Chart: FC<ChartProps> = ({ data }) => (
  <div style={{ height: 640 }}>
    <ResponsiveBar
      data={data}
      keys={data.length > 0 ? Object.keys(data[0]).filter(key => key !== 'id') : []} // TODO: Add to Data
      margin={{ top: 48, right: 256, bottom: 96, left: 48 }}
      enableLabel={false}
      axisBottom={{
        tickPadding: 8,
        tickRotation: -45,
        tickValues: getTimesToShowTicksFor(data),
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          translateX: 128,
          itemWidth: 128,
          itemHeight: 20,
        },
      ]}
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
