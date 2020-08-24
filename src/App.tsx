import React, { FC, useState, useEffect } from 'react';
import { Typography, Row, Col, Alert, Input } from 'antd';

import { convertMessagesToData, filterMessages } from './dataUtils';
import { TimeUnit, Data, Message } from './models';

import Upload from './Upload';
import InstructionsButton from './InstructionsButton';
import TimeUnitRadio from './TimeUnitRadio';
import Senders from './Senders';
import EmptyState from './EmptyState';
import Chart from './Chart';
import COLORS from './COLORS';

const { Title } = Typography;

const App: FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [data, setData] = useState(convertMessagesToData(messages));
  const [searchWord, setSearchWord] = useState('');
  const [colorMap, setColorMap] = useState({});
  const [selectedSenders, setSelectedSenders] = useState(data.senders);
  const [selectedTimeUnit, setSelectedTimeUnit] = useState(TimeUnit.MONTH);

  const { senders, numberOfMessages } = data;
  const hasData = senders.length > 0;
  const dataForTimeUnit = numberOfMessages[selectedTimeUnit];

  useEffect(() => {
    const filteredMessages = searchWord ? filterMessages(messages, searchWord) : messages;
    const newData = convertMessagesToData(filteredMessages);
    setData(newData);
    setSelectedSenders(newData.senders);
    setColorMap(createColorMap(newData));
  }, [messages, searchWord]);

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

              <Upload onComplete={setMessages} style={{ marginBottom: 24 }} />

              <div style={{ marginBottom: 24 }}>
                <Input.Search
                  placeholder="Filter by keyword"
                  aria-label="Filter by keyword"
                  onSearch={(value): void => setSearchWord(value)}
                  enterButton
                />
              </div>

              <TimeUnitRadio
                selected={selectedTimeUnit}
                onSelect={setSelectedTimeUnit}
                disabled={!hasData}
                disabledUnits={getTimeUnitsToDisable(data)}
                style={{ marginBottom: 24 }}
              />

              {senders.length > 0 && (
                <Senders
                  senders={senders}
                  selected={selectedSenders}
                  onChange={setSelectedSenders}
                  colorMap={colorMap}
                />
              )}
            </div>

            {/* TODO: Add chat title */}

            {/* TODO: Add loading state */}

            <div style={{ flex: 1 }}>
              {hasData ? (
                <Chart senders={selectedSenders} data={dataForTimeUnit} colorMap={colorMap} />
              ) : (
                <EmptyState />
              )}
            </div>
          </div>
        </Col>
      </Row>
    </main>
  );
};

function createColorMap(newData: Data): Record<string, string> {
  return newData.senders.reduce(
    (result, sender, index) => ({
      ...result,
      [sender]: COLORS[index % COLORS.length],
    }),
    {},
  );
}

function getTimeUnitsToDisable(data: Data): TimeUnit[] {
  return Object.values(TimeUnit).filter(unit => data.numberOfMessages[unit].length > 500);
}

export default App;
