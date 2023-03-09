import { expect } from '@playwright/test';
import { test } from "./fixtures";

test("has valid fetchStart", async ({ server, page }) => {
    await page.goto(server.EMPTY_HTML_PAGE);
    expect(await page.title()).toBe("Hey there")
    const resTimings = await page.evaluate(() => {
      return performance.getEntries()[0] as PerformanceNavigationTiming
    });
    expect(resTimings.fetchStart).toBeGreaterThanOrEqual(0);
});
