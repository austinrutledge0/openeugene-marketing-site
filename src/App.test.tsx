import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('react-github-btn', () => () => <span data-testid="github-button" />);

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

test('renders the Open Eugene home page', () => {
  const { getByRole } = render(<App />);
  expect(getByRole('heading', { name: /who are we\?/i })).toBeInTheDocument();
});
