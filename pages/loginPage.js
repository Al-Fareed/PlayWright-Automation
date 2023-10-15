const getCredentials = require('../data/config.json')
class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login() {
    await this.page
      .locator(
        "#shopify-section-header > sticky-header > header > div > a.header__icon.header__icon--account.link.focus-inset.small-hide"
      )
      .click();
      await this.page.type('#CustomerEmail',getCredentials.email)
      await this.page.type('#CustomerPassword',getCredentials.password)
      
      await this.page.click('#customer_login > button');
      await this.page.waitForTimeout(2000); 
  }

  async isLoggedIn() {
    const pageTitle = await page.title();
    return pageTitle;
  }
}

module.exports = LoginPage;
