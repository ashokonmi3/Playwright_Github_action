const { test, expect } = require("@playwright/test");

test("verify Playwright website title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page).toHaveTitle(/Playwright/);
});

test("verify Get Started link is visible", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(page.getByRole("link", { name: "Get started" })).toBeVisible();
});
