import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

// eslint-disable-next-line import/no-unresolved
import App from '../App';

it('renders correctly', () => {
  renderer.create(<App />);
});
