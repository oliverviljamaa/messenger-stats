import React, { FC, useState } from 'react';
import { Typography, Row, Col, Alert } from 'antd';

import { emptyData } from './dataUtils';
import { TimeUnit, Data } from './models';

import Upload from './Upload';
import InstructionsButton from './InstructionsButton';
import TimeUnitRadio from './TimeUnitRadio';
import Senders from './Senders';
import EmptyState from './EmptyState';
import Chart from './Chart';
import COLORS from './COLORS';

const { Title } = Typography;

const App: FC = () => {
  const [data, setData] = useState(emptyData);
  const [selectedSenders, setSelectedSenders] = useState(data.senders);
  const [selectedTimeUnit, setSelectedTimeUnit] = useState(TimeUnit.MONTH);

  const { senders, numberOfMessages } = data;
  const dataForTimeUnit = numberOfMessages[selectedTimeUnit];

  return (
    <main style={{ padding: 32 }}>
      <Title>Messenger stats</Title>

      <Row>
        <Col xs={24} lg={0}>
          <Alert
            message="To use the visualization tool, please return to this page on a device with a bigger screen, such as your laptop or desktop computer."
            type="warning"
          />
        </Col>

        <Col xs={0} lg={24}>
          <div style={{ display: 'flex' }}>
            <div>
              <InstructionsButton />

              <Upload
                onComplete={(newData): void => {
                  setSelectedSenders(newData.senders);
                  setData(newData);
                }}
                style={{ marginBottom: 24 }}
              />

              <TimeUnitRadio
                selected={selectedTimeUnit}
                onSelect={setSelectedTimeUnit}
                disabled={data === emptyData}
                disabledUnits={getTimeUnitsToDisable(data)}
                style={{ marginBottom: 24 }}
              />

              {senders.length > 0 && (
                <Senders
                  senders={senders}
                  selected={selectedSenders}
                  onChange={setSelectedSenders}
                  colors={COLORS}
                />
              )}
            </div>

            {/* TODO: Add keyword filtering */}

            {/* TODO: Add chat title */}

            {/* TODO: Add loading state */}

            <div style={{ flex: 1 }}>
              {data === emptyData ? (
                <EmptyState />
              ) : (
                <Chart senders={selectedSenders} data={dataForTimeUnit} colors={COLORS} />
              )}
            </div>
          </div>
        </Col>
      </Row>
    </main>
  );
};

function getTimeUnitsToDisable(data: Data): TimeUnit[] {
  return Object.values(TimeUnit).filter(unit => data.numberOfMessages[unit].length > 500);
}

export default App;
