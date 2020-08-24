import React from 'react';
import { render, waitFor, waitForElementToBeRemoved, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import rgbHex from 'rgb-hex';

import App from './App';
import { FileContent } from './dataUtils';

describe('App', () => {
  const FILE_CONTENTS: FileContent[] = [
    {
      messages: [
        {
          sender_name: 'Rick Sanchez',
          content: 'Burp',
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
          content: 'Hey (burp)',
          timestamp_ms: timestamp('2019/11/01 02:25:12'),
        },
        {
          sender_name: 'Mr. Meeseeks',
          content: 'Look at me (burp)',
          timestamp_ms: timestamp('2019/11/01 02:25:12'),
        },
        {
          sender_name: 'Morty Smith',
          content: 'Oh jeez',
          timestamp_ms: timestamp('2019/10/31 16:23:42'),
        },
      ],
    },
  ];

  beforeEach(() => {
    mockBoundingRectSoChartWouldBeRendered();
    mockMatchMediaForRowsAndColsToWork();
  });

  it('shows empty state and on upload, replaces it with correct columns and updates on time unit change', async () => {
    const { container } = render(<App />);

    expect(screen.getByText('No Data')).toBeInTheDocument();

    uploadFiles(container);

    await waitForElementToBeRemoved(() => screen.getByText('No Data'));

    expect(screen.getByText('Oct 2019')).toBeInTheDocument();
    expect(screen.getByText('Nov 2019')).toBeInTheDocument();
    expect(screen.getByText('Dec 2019')).toBeInTheDocument();
    expect(screen.getByText('Jan 2020')).toBeInTheDocument();

    userEvent.click(screen.getByText('DAY'));

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
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    });

    userEvent.click(screen.getByText('WEEK'));

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
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    });

    userEvent.click(screen.getByText('YEAR'));

    await waitFor(() => {
      ['2019', '2020'].forEach(text => {
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    });
  });

  it('shows no senders, on upload shows senders with same colors as bars, and allows filtering', async () => {
    const { container } = render(<App />);

    expect(screen.queryAllByRole('checkbox')).toHaveLength(0);

    uploadFiles(container);

    await waitFor(() => expect(screen.queryAllByRole('checkbox')).toHaveLength(4));

    const MORTY_MESSAGES = 2;
    const RICK_MESSAGES = 2;
    const MR_MEESEEKS_MESSAGES = 1;
    const ALL_MESSAGES = MORTY_MESSAGES + RICK_MESSAGES + MR_MEESEEKS_MESSAGES;

    const allFilter = screen.getByText('All senders');

    const mortyFilter = screen.getByText('Morty Smith');
    expect(barsWithFilterColor(mortyFilter, container)).toHaveLength(MORTY_MESSAGES);
    const rickFilter = screen.getByText('Rick Sanchez');
    expect(barsWithFilterColor(rickFilter, container)).toHaveLength(RICK_MESSAGES);
    const mrMeeseeksFilter = screen.getByText('Mr. Meeseeks');
    expect(barsWithFilterColor(mrMeeseeksFilter, container)).toHaveLength(MR_MEESEEKS_MESSAGES);

    expect(getBars(container)).toHaveLength(ALL_MESSAGES);

    userEvent.click(rickFilter);
    expect(getBars(container)).toHaveLength(ALL_MESSAGES - RICK_MESSAGES);
    expect(barsWithFilterColor(rickFilter, container)).toHaveLength(0);

    userEvent.click(mortyFilter);
    expect(getBars(container)).toHaveLength(ALL_MESSAGES - RICK_MESSAGES - MORTY_MESSAGES);
    expect(barsWithFilterColor(mortyFilter, container)).toHaveLength(0);

    userEvent.click(mortyFilter);
    expect(getBars(container)).toHaveLength(ALL_MESSAGES - RICK_MESSAGES);
    expect(barsWithFilterColor(mortyFilter, container)).toHaveLength(MORTY_MESSAGES);

    userEvent.click(allFilter);
    expect(getBars(container)).toHaveLength(ALL_MESSAGES);

    userEvent.click(allFilter);
    expect(getBars(container)).toHaveLength(0);
  });

  it('allows filtering by keyword', async () => {
    const { container } = render(<App />);

    uploadFiles(container);

    await waitFor(() => expect(getBars(container)).toHaveLength(5));

    const filterInput = screen.getByRole('textbox', { name: /Filter/ });
    const filterButton = screen.getByRole('button', { name: /search/ });

    userEvent.type(filterInput, 'burp');
    userEvent.click(filterButton);

    await waitFor(() => expect(getBars(container)).toHaveLength(3));

    expect(screen.queryByText('Morty Smith')).not.toBeInTheDocument();
    const rickFilter = screen.getByText('Rick Sanchez');
    expect(barsWithFilterColor(rickFilter, container)).toHaveLength(2);
    const mrMeeseeksFilter = screen.getByText('Mr. Meeseeks');
    expect(barsWithFilterColor(mrMeeseeksFilter, container)).toHaveLength(1);

    userEvent.clear(filterInput);
    userEvent.click(filterButton);

    await waitFor(() => expect(getBars(container)).toHaveLength(5));
  });

  it('shows instructions on clicking "how does it work"', async () => {
    render(<App />);

    const button = screen.getByText(/how does it work/i);

    expect(screen.queryByText(/request your data from facebook/i)).not.toBeInTheDocument();
    userEvent.click(button);
    expect(screen.getByText(/request your data from facebook/i)).toBeInTheDocument();
  });

  function getBars(container: HTMLElement): SVGRectElement[] {
    return Array.from(container.querySelectorAll('rect')).filter(isNotChartContainerRect);
  }

  function isNotChartContainerRect(rect: SVGRectElement): boolean {
    return rect.getAttribute('fill') !== 'transparent';
  }

  function barsWithFilterColor(filter: HTMLElement, container: HTMLElement): SVGRectElement[] {
    const color = (filter.previousElementSibling as HTMLElement).style.backgroundColor;
    return getBars(container).filter(bar => bar.getAttribute('fill') === `#${rgbHex(color)}`);
  }

  function uploadFiles(container: HTMLElement): void {
    const uploadInput = container.querySelector('input[type="file"]');
    const files = mapContentsToFiles(FILE_CONTENTS);

    // For TypeScript
    if (uploadInput) {
      userEvent.upload(uploadInput, files);
    }
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

  function mockMatchMediaForRowsAndColsToWork(): void {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  }
});
