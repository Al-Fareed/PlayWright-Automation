const commonUtils = require("./commonUtils");

class MainNavigation {
  constructor(page) {
    this.page = page;
  }
  
  async isSideNavPresent() {
      const utils = new commonUtils(this.page);
      return utils.isElementPresent(
      "#shopify-section-header > sticky-header > header > header-drawer > details > summary"
    );
  }

  async getSelector(option) {
    if (await this.isSideNavPresent()) {
      switch (option.toLowerCase()) {
        case "home":
          return "#menu-drawer > div > div > nav > ul > li:nth-child(1) > a";
          break;
        case "store":
          return "#menu-drawer > div > div > nav > ul > li:nth-child(2) > a";
          break;
        case "contact":
          return "#menu-drawer > div > div > nav > ul > li:nth-child(3) > a";
          break;
        default:
          return null;
      }
    } else {
      switch (option.toLowerCase()) {
        case "home":
          return "#shopify-section-header > sticky-header > header > nav > ul > li:nth-child(1) > a";
          break;
        case "store":
          return "#shopify-section-header > sticky-header > header > nav > ul > li:nth-child(2) > a";
          break;
        case "contact":
          return "#shopify-section-header > sticky-header > header > nav > ul > li:nth-child(3) > a";
          break;
        default:
          return null;
      }
    }
  }

  async selectNav(option) {
    let selector =await this.getSelector(option);
    console.log('Got the selector', selector);
    if (selector) {
      await this.page.click(selector.toString());
    }else{
        console.log("No such option found in navbar");
    }
  }
}
module.exports = MainNavigation;