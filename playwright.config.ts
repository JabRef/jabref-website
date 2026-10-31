import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/visual',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://127.0.0.1:4173',
    colorScheme: 'light',
    locale: 'en-US',
    timezoneId: 'UTC',
    reducedMotion: 'reduce',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
  ],
  webServer: {
    command: 'pnpm exec serve .output/public --listen 4173',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
  },
})
