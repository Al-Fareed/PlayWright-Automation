class commonUtils {
    constructor(page){
        this.page = page;
    }
    async navigateTo(url){
        await this.page.goto(url);
    }
    async isElementPresent(selector){
        try {
            await page.waitForSelector(selector, { timeout: 1000 });
            return true; 
          } catch (error) {
            return false; 
          }
    }
}
module.exports = commonUtils;