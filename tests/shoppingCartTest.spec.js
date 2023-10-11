const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const HomePage = require('../pages/HomePage');
const CatalogPage = require('../pages/CatalogPage');
const ProductPage = require('../pages/productPage');
const CartPage = require('../pages/cartPage');
const ShippingDetailsPage = require('../pages/shippingDetailsPage');

test('User log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login();
});

test('Go to Home page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
});

test('Search for a Product', async ({ page }) => {
  const catalogPage = new CatalogPage(page);
  const homePage = new HomePage(page);
  await homePage.navigate();
  await catalogPage.searchProduct('Jeans');
});

test('Select a Product from Catalog', async ({ page }) => {
  const catalogPage = new CatalogPage(page);
  // await catalogPage.navigate();
});

test('Product Purchase Flow', async ({ page }) => {
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const shippingDetailsPage = new ShippingDetailsPage(page);

  // Navigate to a product page and add the product to the cart
  await productPage.navigate();
  await productPage.addToCart();

  // Navigate to the cart and view its contents
  await cartPage.navigate();
  await cartPage.viewCart();

  // Proceed to the checkout process and provide shipping details
  await cartPage.checkout();
  await shippingDetailsPage.provideShippingDetails({
    name: 'John Doe',
    address: '123 Main St',
    city: 'Anytown',
    postalCode: '12345',
  });
});
