const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  it('renders correctly', async () => {
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      failureThreshold: 0.01,
      failureThresholdType: 'percent'
    });
  });

  it('should display a react logo', async () => {
    const logoAlt = await page.$eval('.App-logo', e => e.alt)
    // debugger;
    await expect(logoAlt).toMatch('logo')
  })

  it('should match a link with a "Learn React" text inside', async () => {
    const href = await page.$eval('.App-link', e => e.text)
    await expect(href).toMatch('Learn React')
  })
})
