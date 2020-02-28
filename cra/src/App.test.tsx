describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should display a react logo', async () => {
    const logoAlt = await page.$eval('.App-logo', e => e.alt)
    await expect(logoAlt).toMatch('logo')
  })

  it('should match a link with a "Learn React" text inside', async () => {
    const href = await page.$eval('.App-link', e => e.text)
    await expect(href).toMatch('Learn React')
  })
})
