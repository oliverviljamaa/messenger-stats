import React, { FC, useState } from 'react';
import { Typography } from 'antd';

import { emptyData } from './dataUtils';
import { TimeUnit, Data } from './models';

import Upload from './Upload';
import TimeUnitRadio from './TimeUnitRadio';
import EmptyState from './EmptyState';
import Chart from './Chart';

const { Title } = Typography;

const App: FC = () => {
  const [data, setData] = useState(emptyData);
  const [selectedTimeUnit, setSelectedTimeUnit] = useState(TimeUnit.MONTH);

  const dataForTimeUnit = data[selectedTimeUnit];

  return (
    <main style={{ padding: 32 }}>
      <Title>Messenger stats</Title>

      <Upload onComplete={setData} style={{ marginRight: 16 }} />

      <TimeUnitRadio
        selected={selectedTimeUnit}
        onSelect={setSelectedTimeUnit}
        disabled={data === emptyData}
        disabledUnits={getTimeUnitsToDisable(data)}
      />

      {/* TODO: Add keyword filtering */}

      {/* TODO: Add sender filtering, potentially with own legend */}

      {/* TODO: Add chat title */}

      {/* TODO: Add loading state */}

      {data === emptyData ? <EmptyState /> : <Chart data={dataForTimeUnit} />}
    </main>
  );
};

function getTimeUnitsToDisable(data: Data): TimeUnit[] {
  return Object.values(TimeUnit).filter(unit => data[unit].length > 500);
}

export default App;
