class CartPage {
  constructor(page) {
    this.page = page;
  }

  async viewCart() {
    await this.page.click("#cart-icon-bubble > svg");
  }
  async getNameOfItemInCart() {
    const selector = await this.page.$(
      "#CartItem-1 > td.cart-item__details > a"
    );
    const text = await selector.textContent();
    return text;
  }
  async getNumberOfItemsInCart() {
    const inputElement = await this.page.$("#Quantity-1");

    const inputValue = await inputElement.inputValue();
    return inputValue;
  }
  async checkout() {
    await this.page.click("#checkout");
  }
}

module.exports = CartPage;
