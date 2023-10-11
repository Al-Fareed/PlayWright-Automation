const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const HomePage = require('../pages/HomePage');
const CatalogPage = require('../pages/CatalogPage');
const ProductPage = require('../pages/productPage');
const CartPage = require('../pages/cartPage');
const ShippingDetailsPage = require('../pages/shippingDetailsPage');

test('User can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login();
});

test('Explore Home page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
});

test('Navigate to Catalog Page', async ({ page }) => {
  const catalogPage = new CatalogPage(page);
  await catalogPage.navigate();
  
  // Add assertions to verify if you are on the catalog page
  // For example, you can check for elements specific to the catalog page.
});

test('Search for a Product', async ({ page }) => {
  const catalogPage = new CatalogPage(page);
  await catalogPage.navigate();
  
  // Use the searchProduct method to search for a product
  await catalogPage.searchProduct('Product Name'); // Replace with the actual product name
  
  // Add assertions to verify the search results
});

test('Select a Product from Catalog', async ({ page }) => {
  const catalogPage = new CatalogPage(page);
  await catalogPage.navigate();
  
  // Use the selectProduct method to select a product
  await catalogPage.selectProduct('Product Name'); // Replace with the actual product name
  
  // Add assertions to verify the product details or the product page
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

  // Add assertions to verify the successful completion of the purchase flow
  expect(/* Add your assertions here */).toBeTruthy();
});
