import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('check basic rendered components', () => {
  // https://testing-library.com/docs/react-testing-library/cheatsheet
  test('renders Load default values button', () => {
    const { getByText } = render(<App />);
    const buttonElement = getByText(/Load default values/i);
    expect(buttonElement).toBeInTheDocument();
  });
  test('renders Change Vehicle0 name button', () => {
    const { getByText } = render(<App />);
    const buttonElement = getByText(/Change Vehicle0 name/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
