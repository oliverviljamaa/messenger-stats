import React, { FC, CSSProperties } from 'react';
import { Upload as AntUpload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { RcFile } from 'antd/lib/upload';
import { Data } from '../models';
import { getData } from '../dataUtils';

type UploadProps = {
  onComplete: (data: Data) => void;
  style?: CSSProperties;
};

// TODO: Support uploading a directory, from where all messages_*.json files would be used
const Upload: FC<UploadProps> = ({ onComplete, style }) => (
  <AntUpload
    beforeUpload={async (fileBeingProcessed, allFiles): Promise<void> => {
      if (isLastFile(fileBeingProcessed, allFiles)) {
        const data = await getData(allFiles);
        onComplete(data);
      }
      return Promise.resolve();
    }}
    customRequest={noopToPreventXhrRequest}
    accept="application/json"
    multiple
    showUploadList={false}
  >
    <Button style={style}>
      <UploadOutlined /> Upload messages
    </Button>
  </AntUpload>
);

function isLastFile(file: RcFile, fileList: RcFile[]): boolean {
  return file.uid === fileList[fileList.length - 1].uid;
}

function noopToPreventXhrRequest(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

export default Upload;
