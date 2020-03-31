import React from 'react';
import { render, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
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
              sender_name: 'Rick Sanchez',
              content: 'Hey',
              timestamp_ms: timestamp('2016/02/14 21:00:01'),
            },
            {
              sender_name: 'Morty Smith',
              content: 'Oh boy',
              timestamp_ms: timestamp('2016/02/14 21:00:00'),
            },
            {
              sender_name: 'Morty Smith',
              content: 'Oh jeez',
              timestamp_ms: timestamp('2016/02/14 02:34:56'),
            },
          ],
        },
        {
          messages: [
            {
              sender_name: 'Morty Smith',
              content: 'Oh jeez',
              timestamp_ms: timestamp('2015/10/03 14:15:10'),
            },
          ],
        },
        {
          messages: [
            {
              sender_name: 'Rick Sanchez',
              content: 'Hey',
              timestamp_ms: timestamp('2015/10/02 13:15:10'),
            },
            {
              sender_name: 'Mr. Meeseeks',
              content: 'Look at me',
              timestamp_ms: timestamp('2014/12/31 23:59:59'),
            },
          ],
        },
      ],
      container,
    );

    expect(getByText('No Data')).toBeInTheDocument();

    fireUploadEvent();

    await waitForElementToBeRemoved(() => getByText('No Data'));

    expect(getByText('Feb 2016')).toBeInTheDocument();
    expect(getByText('Oct 2015')).toBeInTheDocument();
    expect(getByText('Dec 2014')).toBeInTheDocument();

    fireEvent.click(getByText('DAY'));

    await waitFor(() => {
      expect(getByText('31/12/2014')).toBeInTheDocument();
      expect(getByText('02/10/2015')).toBeInTheDocument();
      expect(getByText('03/10/2015')).toBeInTheDocument();
      expect(getByText('14/02/2016')).toBeInTheDocument();
    });

    fireEvent.click(getByText('WEEK'));

    await waitFor(() => {
      expect(getByText('29/12/2014 week')).toBeInTheDocument();
      expect(getByText('28/09/2015 week')).toBeInTheDocument();
      expect(getByText('08/02/2016 week')).toBeInTheDocument();
    });

    fireEvent.click(getByText('YEAR'));

    await waitFor(() => {
      expect(getByText('2014')).toBeInTheDocument();
      expect(getByText('2015')).toBeInTheDocument();
      expect(getByText('2016')).toBeInTheDocument();
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
