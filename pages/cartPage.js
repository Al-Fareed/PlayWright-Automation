class CartPage {
    constructor(page) {
      this.page = page;
    }
  
    async viewCart() {
      await this.page.click('#cart-icon-bubble > svg');
    }
    
    async checkout() {
        await this.page.click('#checkout');
    }
  }
  
  module.exports = CartPage;
  