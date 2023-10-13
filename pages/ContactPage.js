const getCredentials = require('../data/config.json')
class ContactPage{
    constructor(page){
        this.page = page;
    }
    async fillDetails(){
        await this.page.locator('id=ContactForm-name').fill(getCredentials.name);
        await this.page.locator('id=ContactForm-email').fill(getCredentials.email);
        await this.page.locator('id=ContactForm-phone').fill(getCredentials.phone);
    }
    async addComment(){
        let comment = "Why this kolaveri kolaveri di.."
        await this.page.locator('id=ContactForm-body').fill(comment)
    }
    async sendComment(){
        await this.page.click('#ContactForm > div.contact__button > button');

    }
}
module.exports = ContactPage;
  