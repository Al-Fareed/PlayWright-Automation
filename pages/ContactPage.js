class ContactPage{
    constructor(page){
        this.page = page;
    }
    async fillDetails(name,email,phone){
        await this.page.locator('id=ContactForm-name').fill(name);
        await this.page.locator('id=ContactForm-email').fill(email);
        await this.page.locator('id=ContactForm-phone').fill(phone);
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
  