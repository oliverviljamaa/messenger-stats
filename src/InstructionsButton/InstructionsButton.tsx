import React, { FC, useState } from 'react';
import { Button, Drawer, Typography } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Paragraph, Text } = Typography;

const InstructionsButton: FC<ButtonProps> = ({ style }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <Button type="link" block onClick={(): void => setIsDrawerOpen(true)} style={style}>
        How does it work
        <QuestionCircleOutlined />
      </Button>

      <Drawer
        title="How does it work"
        onClose={(): void => setIsDrawerOpen(false)}
        visible={isDrawerOpen}
        width={Math.min(window.innerWidth, 480)}
        footer={
          <div style={{ textAlign: 'center' }}>
            Made with{' '}
            <span role="img" aria-label="love">
              💙
            </span>{' '}
            by{' '}
            <a href="https://github.com/oliverviljamaa" target="_blank" rel="noopener noreferrer">
              Oliver Viljamaa
            </a>
            .
          </div>
        }
      >
        <Paragraph>
          You need to request your data from Facebook to get the message files needed to use this
          visualization tool. It&apos;s easy and secure, but you may need to wait a bit.
        </Paragraph>

        <ol>
          <li>
            Follow{' '}
            <a
              href="https://www.facebook.com/help/212802592074644"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook&apos;s guide on how to request a copy of your data
            </a>
            . Select only <Text strong>Messages</Text> from the categories in the download page.
            Choose <Text strong>Format: JSON</Text> and <Text strong>Media Quality: Low</Text> and
            click <Text strong>Create File</Text>.
          </li>

          <li>
            When the file is ready, Facebook will send you an email titled{' '}
            <Text strong>Your Facebook information file is ready</Text>. If you have many messages,
            this may take up to a few days.
          </li>

          <li>
            Download the file from the link in the email and extract the zipped file&apos;s
            contents.
          </li>

          <li>
            Come back to this site, click <Text strong>Upload messages</Text> and select all the{' '}
            <Text strong>messages_*.json</Text> files from any chat folder. You&apos;ll find the
            chat folders in the <Text strong>inbox/</Text> folder in the folder you just extracted.
          </li>

          <li>
            Don&apos;t worry, your messages are never uploaded anywhere — the tool is built with
            privacy in mind and works locally on your computer. To verify this, try loading the
            page, turning off your internet connection, and uploading some messages: the tool will
            still work.
          </li>

          <li>
            Enjoy and{' '}
            <a href="https://forms.gle/Dqn4NC6tRrH1D5qA7" target="_blank" rel="noopener noreferrer">
              leave feedback
            </a>
            !
          </li>
        </ol>
      </Drawer>
    </div>
  );
};

export default InstructionsButton;
