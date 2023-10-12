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

  const homePage = new HomePage(page);
  await homePage.navigate();

  const catalogPage = new CatalogPage(page);
  await homePage.navigate();
  await catalogPage.searchProduct('Jeans');
  await catalogPage.selectProduct();

  // Implement this test as needed

  const productPage = new ProductPage(page);
  await productPage.addToCart();
    await productPage.isCountElementPresent();
  

  const cartPage = new CartPage(page);
  await cartPage.viewCart();
  await cartPage.checkout();
  
  const shippingDetailsPage = new ShippingDetailsPage(page);
  await shippingDetailsPage.provideShippingDetails({
    name: 'John Doe',
    address: '123 Main St',
    city: 'Anytown',
    postalCode: '12345',
  });
  await page.waitForTimeout(2000); 
});
