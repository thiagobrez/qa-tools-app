import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

// eslint-disable-next-line import/no-unresolved
import App from '../App';

it('renders correctly', () => {
  render(<App />);
});

it('should click three times', async () => {
  const { getByTestId, getByText } = render(<App />);

  const button = getByTestId('click-me');
  const expectedValue = 'You clicked 3 times';

  fireEvent.press(button);
  fireEvent.press(button);
  fireEvent.press(button);

  expect(getByText(expectedValue)).toMatchSnapshot();
});
