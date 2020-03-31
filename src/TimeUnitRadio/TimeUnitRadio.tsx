import React, { FC } from 'react';
import { Radio } from 'antd';

import { TimeUnit } from '../models';

type TimeUnitRadioProps = {
  selected: TimeUnit;
  onSelect: (unit: TimeUnit) => void;
  disabled: boolean;
  disabledUnits: TimeUnit[];
};

const TimeUnitRadio: FC<TimeUnitRadioProps> = ({ selected, onSelect, disabled, disabledUnits }) => (
  <Radio.Group disabled={disabled}>
    {Object.values(TimeUnit).map(unit => (
      <Radio.Button
        value={unit}
        checked={unit === selected}
        onChange={({ target: { value } }): void => onSelect(value as TimeUnit)}
        disabled={disabledUnits.includes(unit)}
        key={unit}
      >
        {unit}
      </Radio.Button>
    ))}
  </Radio.Group>
);

export default TimeUnitRadio;
