const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test('User can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login();
  
});

// You can add more test cases for different scenarios here.

