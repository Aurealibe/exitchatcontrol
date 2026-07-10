import { defineConfig, devices } from '@playwright/test'

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:4321'

// Two projects: a normal chromium run, and a JS-disabled run — the guide
// must be fully readable with JavaScript off (Tor Browser "safest" mode
// is part of this site's audience).
export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  reporter: [['list']],
  use: {
    baseURL,
  },
  webServer: {
    command: 'pnpm preview --host 127.0.0.1 --port 4321',
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    {
      name: 'nojs',
      use: { ...devices['Desktop Chrome'], javaScriptEnabled: false },
    },
  ],
})
