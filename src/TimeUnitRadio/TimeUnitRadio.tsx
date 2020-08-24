import React, { FC, CSSProperties } from 'react';
import { Radio } from 'antd';

import { TimeUnit } from '../models';

type TimeUnitRadioProps = {
  selected: TimeUnit;
  onSelect: (unit: TimeUnit) => void;
  disabled: boolean;
  disabledUnits: TimeUnit[];
  style: CSSProperties;
};

// TODO: Fix no time unit being selected on initialisation
const TimeUnitRadio: FC<TimeUnitRadioProps> = ({
  selected,
  onSelect,
  disabled,
  disabledUnits,
  style,
}) => (
  <Radio.Group disabled={disabled} style={style}>
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
