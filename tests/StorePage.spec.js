const { test, expect } = require("@playwright/test");
const commonUtils = require("../utils/commonUtils");
const MainNavigation = require("../utils/MainNavigation");
const StorePage = require("../pages/StorePage");

test("Select a product", async ({ page }) => {
  const utils = new commonUtils(page);
  const mainNav = new MainNavigation(page);
  const storePage = new StorePage(page);

  await utils.navigateTo("https://web-playground.ultralesson.com/");

  await mainNav.selectNav("store");

  await storePage.selectAvailability();
  await storePage.selectSorting();

  await page.waitForTimeout(2500);
});
// npx playwright test tests/StorePage.spec.js --project=chromium --headed 