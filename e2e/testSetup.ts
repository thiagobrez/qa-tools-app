/* eslint-disable */

import { cleanup, init } from 'detox';
import * as specReporter from 'detox/runners/jest/specReporter';

const adapter = require('detox/runners/jest/adapter');
const config = require('../package.json').detox;

jest.setTimeout(120000);

// @ts-ignore
jasmine.getEnv().addReporter(adapter);
// @ts-ignore
jasmine.getEnv().addReporter(specReporter);

beforeAll(async () => {
  await init(config, { initGlobals: false });
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await cleanup();
});
