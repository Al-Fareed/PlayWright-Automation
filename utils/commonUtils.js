class commonUtils {
    constructor(page){
        this.page = page;
    }
    async navigateTo(url){
        await this.page.goto(url);
    }
}
module.exports = commonUtils;