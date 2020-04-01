import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  GetByText,
} from '@testing-library/react';
import App from './App';

import { FileContent } from './dataUtils';

describe('App', () => {
  it('shows empty state and on upload, replaces it with correct columns and updates on time unit change', async () => {
    mockBoundingRectSoChartWouldBeRendered();

    const { getByText, container } = render(<App />);

    const fireUploadEvent = getFireUploadEventForContents(
      [
        {
          messages: [
            {
              sender_name: 'Morty Smith',
              content: 'Oh boy',
              timestamp_ms: timestamp('2020/01/01 00:00:00'),
            },
            {
              sender_name: 'Morty Smith',
              content: 'Oh jeez',
              timestamp_ms: timestamp('2019/12/31 23:59:59'),
            },
          ],
        },
        {
          messages: [
            {
              sender_name: 'Rick Sanchez',
              content: 'Hey',
              timestamp_ms: timestamp('2019/11/01 02:25:12'),
            },
            {
              sender_name: 'Mr. Meeseeks',
              content: 'Look at me',
              timestamp_ms: timestamp('2019/11/01 02:25:12'),
            },
            {
              sender_name: 'Morty Smith',
              content: 'Oh jeez',
              timestamp_ms: timestamp('2019/10/31 16:23:42'),
            },
          ],
        },
      ],
      container,
    );

    expect(getByText('No Data')).toBeInTheDocument();

    fireUploadEvent();

    await waitForElementToBeRemoved(() => getByText('No Data'));

    expect(getByText('Oct 2019')).toBeInTheDocument();
    expect(getByText('Nov 2019')).toBeInTheDocument();
    expect(getByText('Dec 2019')).toBeInTheDocument();
    expect(getByText('Jan 2020')).toBeInTheDocument();

    fireEvent.click(getByText('DAY'));

    await waitFor(() => {
      [
        '31/10/2019',
        '03/11/2019',
        '06/11/2019',
        '09/11/2019',
        '12/11/2019',
        '15/11/2019',
        '18/11/2019',
        '21/11/2019',
        '24/11/2019',
        '27/11/2019',
        '30/11/2019',
        '03/12/2019',
        '06/12/2019',
        '09/12/2019',
        '12/12/2019',
        '15/12/2019',
        '18/12/2019',
        '21/12/2019',
        '24/12/2019',
        '27/12/2019',
        '30/12/2019',
      ].forEach(text => {
        expect(getByText(text)).toBeInTheDocument();
      });
    });

    fireEvent.click(getByText('WEEK'));

    await waitFor(() => {
      [
        '28/10/2019 week',
        '04/11/2019 week',
        '11/11/2019 week',
        '18/11/2019 week',
        '25/11/2019 week',
        '02/12/2019 week',
        '09/12/2019 week',
        '16/12/2019 week',
        '23/12/2019 week',
        '30/12/2019 week',
      ].forEach(text => {
        expect(getByText(text)).toBeInTheDocument();
      });
    });

    fireEvent.click(getByText('YEAR'));

    await waitFor(() => {
      ['2019', '2020'].forEach(text => {
        expect(getByText(text)).toBeInTheDocument();
      });
    });
  });

  function getFireUploadEventForContents(
    contents: FileContent[],
    container: HTMLElement,
  ): () => void {
    const uploadInput = container.querySelector('input[type="file"]');
    const files = mapContentsToFiles(contents);
    Object.defineProperty(uploadInput, 'files', { value: files });

    return (): void => {
      // For TypeScript
      if (uploadInput) {
        fireEvent.change(uploadInput);
      }
    };
  }

  function mapContentsToFiles(contents: FileContent[]): File[] {
    return contents.map(
      (content, index) =>
        new File([JSON.stringify(content)], `messages_${index + 1}.json`, {
          type: 'application/json',
        }),
    );
  }

  function timestamp(string: string): number {
    return new Date(string).getTime();
  }

  function mockBoundingRectSoChartWouldBeRendered(): void {
    jest.spyOn(HTMLDivElement.prototype, 'getBoundingClientRect').mockReturnValueOnce({
      width: 1280,
      height: 640,
      x: 0,
      y: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      toJSON: jest.fn(),
    });
  }
});
