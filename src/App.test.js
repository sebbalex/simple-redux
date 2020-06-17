import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/Change Vehicle0 name/i);
  expect(buttonElement).toBeInTheDocument();
});
