class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async addQty(){
    await this.page.locator('#Quantity-template--15328405717213__main').fill('2');
  }

  async addToCart() {
    await this.page.click(
      "#product-form-template--15328405717213__main > div > button"
    );
  }
  async isCountElementPresent() {
    await this.page.waitForSelector("#cart-icon-bubble > div", {
      state: "attached",
    });
  }
}

module.exports = ProductPage;
