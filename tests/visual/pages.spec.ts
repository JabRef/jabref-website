import { expect, test } from '@playwright/test'

for (const [name, path] of [
  ['home', '/'],
  ['legal-notices', '/legal-notices/'],
  ['privacy-policy', '/privacy-policy/'],
] as const) {
  test(`${name} renders`, async ({ page }) => {
    const response = await page.goto(path)
    expect(response?.status()).toBe(200)
    await page.evaluate(() => document.fonts.ready)
    if (name === 'home') {
      await expect(page.locator('.download-options')).toHaveAttribute('aria-busy', 'false')
    }
    await expect.poll(() => page.locator('img').evaluateAll(images =>
      images.every(image => image.complete && image.naturalWidth > 0),
    )).toBe(true)
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true, animations: 'disabled' })
  })
}

test('download section in dark mode', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Switch to dark theme' }).click()
  await expect(page.locator('.download-options')).toHaveAttribute('aria-busy', 'false')
  await page.evaluate(() => document.fonts.ready)
  await expect(page.locator('#download')).toHaveScreenshot('download-dark.png', { animations: 'disabled' })
})

test('mobile navigation opens', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile')
  await page.goto('/')
  await page.getByRole('button', { name: 'Open navigation menu' }).click()
  await expect(page.locator('#site-navigation')).toHaveScreenshot('mobile-navigation.png', { animations: 'disabled' })
})
