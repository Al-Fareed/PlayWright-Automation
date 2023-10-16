const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/loginPage");
const HomePage = require("../pages/HomePage");
const CatalogPage = require("../pages/CatalogPage");
const ProductPage = require("../pages/productPage");
const CartPage = require("../pages/cartPage");
const ShippingDetailsPage = require("../pages/shippingDetailsPage");
const commonUtils = require("../utils/commonUtils");
const exp = require("constants");

test("Adding product to cart", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const catalogPage = new CatalogPage(page);
  const productPage = new ProductPage(page);
  const shippingDetailsPage = new ShippingDetailsPage(page);
  const cartPage = new CartPage(page);
  const utils = new commonUtils(page);

  await utils.navigateTo("https://web-playground.ultralesson.com/");
  await loginPage.login();

  await utils.navigateTo("https://web-playground.ultralesson.com/");
  await expect(page).toHaveTitle(/ul-web-playground/);

  await catalogPage.searchProduct("Jeans");
  await catalogPage.selectProduct();
  await expect(page).toHaveTitle(/Belted Jeans – ul-web-playground/);

  await productPage.addQty();
  await productPage.addToCart();
  await productPage.waitForCountElementPresent();

  await cartPage.viewCart();
  const nameOfItemInCart = await cartPage.getNameOfItemInCart();
  expect(nameOfItemInCart).toContain("Belted Jeans");
  const numberOfItemsInCart = await cartPage.getNumberOfItemsInCart();
  expect(numberOfItemsInCart).toBe('2');
  await cartPage.checkout();

  await shippingDetailsPage.provideShippingDetails({
    name: "John Doe",
    address: "123 Main St",
    city: "Anytown",
    postalCode: "12345",
  });
  await page.waitForTimeout(2000);
});
// npx playwright test tests/AddProductToCart.spec.js --project=chromium --headed
