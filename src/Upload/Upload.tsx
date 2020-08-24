import React, { FC, CSSProperties } from 'react';
import { Upload as AntUpload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/lib/upload';

import { Message } from '../models';
import { getMessages } from '../dataUtils';

import './Upload.css';

type UploadProps = {
  onComplete: (messages: Message[]) => void;
  style?: CSSProperties;
};

// TODO: Support uploading a directory, from where all messages_*.json files would be used
const Upload: FC<UploadProps> = ({ onComplete, style }) => (
  <div>
    <AntUpload
      beforeUpload={async (fileBeingProcessed, allFiles): Promise<void> => {
        if (isLastFile(fileBeingProcessed, allFiles)) {
          const messages = await getMessages(allFiles);
          onComplete(messages);
        }
        return Promise.resolve();
      }}
      customRequest={noopToPreventXhrRequest}
      accept="application/json"
      multiple
      showUploadList={false}
    >
      <Button block style={style}>
        <UploadOutlined /> Upload messages
      </Button>
    </AntUpload>
  </div>
);

function isLastFile(file: RcFile, fileList: RcFile[]): boolean {
  return file.uid === fileList[fileList.length - 1].uid;
}

function noopToPreventXhrRequest(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

export default Upload;
