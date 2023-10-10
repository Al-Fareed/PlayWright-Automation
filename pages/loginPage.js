class LoginPage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate() {
      await this.page.goto('https://web-playground.ultralesson.com/');
    }
  
    async login(phone) {
        await this.page.click('#shopify-section-header > sticky-header > header > div > a.header__icon.header__icon--account.link.focus-inset.small-hide > svg');
    }
  
    async isLoggedIn() {
      // You can add code to verify if the user is logged in
      // For example, checking for elements specific to the logged-in state.
      const pageTitle = await page.title();
      return pageTitle;
    }
  }
  
  module.exports = LoginPage;
  