const getCredentials = require('../data/config.json')
class ContactPage{
    constructor(page){
        this.page = page;
    }
    async fillDetails(){
        console.log(getCredentials.name);
        await this.page.type('id=ContactForm-name',getCredentials.name);
        await this.page.type('id=ContactForm-email',getCredentials.email);
        await this.page.type('id=ContactForm-phone',getCredentials.phone);
    }
    async addComment(){
        let comment = "Hi there, this message is to test check";
        await this.page.type('id=ContactForm-body',comment)
    }
    async sendComment(){
        await this.page.click('#ContactForm > div.contact__button > button');

    }
}
module.exports = ContactPage;
  