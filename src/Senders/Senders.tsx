import React, { FC, Fragment } from 'react';
import { Checkbox, Divider, Badge } from 'antd';

import { Message } from '../models';

type Sender = Message['sender'];

type SendersProps = {
  senders: Sender[];
  selected: Sender[];
  onChange: (senders: Sender[]) => void;
  colors: string[];
};

const Senders: FC<SendersProps> = ({ senders, selected, onChange, colors }) => {
  return (
    <div>
      <Checkbox
        indeterminate={selected.length > 0 && selected.length < senders.length}
        onChange={({ target: { checked } }): void => onChange(checked ? senders : [])}
        checked={selected.length === senders.length}
      >
        All senders
      </Checkbox>

      <Divider style={{ margin: '12px 0' }} />

      {senders.map((sender, index) => (
        <Fragment key={sender}>
          <Checkbox
            onChange={({ target: { checked } }): void =>
              onChange(checked ? [...selected, sender] : selected.filter(name => name !== sender))
            }
            checked={selected.includes(sender)}
          >
            <Badge color={colors[index % colors.length]} text={sender} />
          </Checkbox>
          <br />
        </Fragment>
      ))}
    </div>
  );
};

export default Senders;
