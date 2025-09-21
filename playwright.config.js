// @ts-check
const { defineConfig, devices } = require('@playwright/test');
// require('dotenv').config(); // Uncomment if using .env

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  
  /* Multiple reporters for better visibility */
  reporter: [
    ['list'], // console-friendly
    ['html', { open: 'never' }], // HTML report
    ['json', { outputFile: 'test-results.json' }], // For CI tools
    ['allure-playwright'], // Requires npm install -D allure-playwright
  ],

  /* Shared settings for all projects */
  use: {
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:3000',
    headless: !!process.env.CI,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure', // Always keep trace if failure
    actionTimeout: 30 * 1000, // per action
    navigationTimeout: 60 * 1000,
  },

  /* Configure projects */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    /* Mobile emulation */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  /* Optional: Run dev server before tests */
  webServer: process.env.START_SERVER
    ? {
        command: 'npm run start',
        url: process.env.BASE_URL || 'http://127.0.0.1:3000',
        reuseExistingServer: !process.env.CI,
        timeout: 120 * 1000,
      }
    : undefined,
});
