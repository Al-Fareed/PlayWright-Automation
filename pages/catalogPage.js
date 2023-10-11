
class CatalogPage {
    constructor(page) {
      this.page = page;
    }
  
    async searchProduct(productName) {
      await this.page.click('#shopify-section-header > sticky-header > header > div > details-modal > details > summary > span > svg.modal__toggle-open.icon.icon-search');
      await this.page.locator('id=Search-In-Modal').fill(productName)
    }
  
    async selectProduct(productName) {
      // Implement code to select a product from the catalog (e.g., click on a product's link)
    }
  }
  
  module.exports = CatalogPage;
  