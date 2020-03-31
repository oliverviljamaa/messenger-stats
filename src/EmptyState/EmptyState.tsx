import React, { FC } from 'react';
import { Empty } from 'antd';

const EmptyState: FC = () => (
  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{ marginTop: 128 }} />
);

export default EmptyState;
