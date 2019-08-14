// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('ts-jest/presets');

module.exports = {
  ...defaults,
  preset: '@testing-library/react-native',
  transform: {
    ...defaults.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'tsconfig.jest.json',
    },
  },
  cacheDirectory: '.jest/cache',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/e2e/',
  ],
};
