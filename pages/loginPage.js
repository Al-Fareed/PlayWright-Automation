class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://web-playground.ultralesson.com/");
  }

  async login() {
    await this.page
      .locator(
        "#shopify-section-header > sticky-header > header > div > a.header__icon.header__icon--account.link.focus-inset.small-hide"
      )
      .click();
      await this.page.locator('#CustomerEmail').fill("alfareed@testvagrant.com")
      await this.page.locator('#CustomerPassword').fill("alfareed@TV781")
      
      // await this.page.locator('id=CustomerPassword').fill("alfareed@TV781")
      await this.page.click('#customer_login > button');
      await this.page.waitForTimeout(10000); 
  }

  async isLoggedIn() {
    const pageTitle = await page.title();
    return pageTitle;
  }
}

module.exports = LoginPage;
