import { expect,test } from "@playwright/test";
import HomePage from "../pages/HomePage";

test('Explore Home page',async({page})=>{
    const homePage = new HomePage(page);

    await homePage.navigate();

})