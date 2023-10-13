class StorePage {
  constructor(page) {
    this.page = page;
  }

  async selectAvailability() {
    await this.page.click(
      "#FacetsWrapperDesktop > details:nth-child(2) > summary > div > span"
    );
    await this.page.click(
      "#FacetsWrapperDesktop > details:nth-child(2) > div > ul > li:nth-child(1) > label"
    );
  }

  async selectSortBy() {
    await this.page.selectOption("#SortBy",'Price, low to high');
  }
}
module.exports = StorePage;

