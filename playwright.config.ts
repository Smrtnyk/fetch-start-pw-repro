import { PlaywrightTestConfig } from '@playwright/test';

export const stableConfig: PlaywrightTestConfig = {
  fullyParallel: true,
  reporter: [
    ["list"],
  ],
  timeout: 60 * 1000,
  testDir: "source",
  testMatch: "**/*.spec.ts",
  quiet: false,
  projects: [
    // {
    //   name: "webkit",
    //   use: {
    //     browserName: "webkit",
    //   }
    // },
    // works fine on these browsers
    // {
    //     name: "chromium",
    //     use: { browserName: "chromium" }
    // },
    {
        name: "firefox",
        use: {
            browserName: "firefox"
        }
    },
  ]
};

export default stableConfig;
