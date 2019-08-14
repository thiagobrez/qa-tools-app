import {
 expect,
 device,
 element,
 by,
} from 'detox';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should click three times', async () => {
    const expectedValue = 'You clicked 3 times';

    await expect(element(by.id('click-me'))).toBeVisible();
    await element(by.id('click-me')).tap();
    await element(by.id('click-me')).tap();
    await element(by.id('click-me')).tap();

    await expect(element(by.text(expectedValue))).toBeVisible();
  });
});
