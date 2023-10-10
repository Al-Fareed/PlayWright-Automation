// pages/homePage.js
class HomePage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate() {
      await this.page.goto('https://www.flipkart.com/');
    }
  
    getProductCount() {
        
    }
    
    // Add page-specific methods here
  }
  
  module.exports = HomePage;
  