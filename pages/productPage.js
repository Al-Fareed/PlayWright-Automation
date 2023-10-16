class ProductPage {
  constructor(page) {
    this.page = page;
  }

  async addQty() {
    await this.page.fill("#Quantity-template--15328405717213__main", "2");
  }

  async addToCart() {
    await this.page.click(
      "#product-form-template--15328405717213__main > div > button"
    );
  }
  async waitForCountElementPresent() {
    await this.page.waitForSelector("#cart-icon-bubble > div", {
      state: "attached",
    });
  }
}

module.exports = ProductPage;
