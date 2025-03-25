import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import { fixture } from "../hooks/pageFixture";

import { goto } from "../../helper/wrapper/PlaywrightWrappers";

import { LandingPageActions } from "../pages/landingPageActions";

setDefaultTimeout(60 * 1000 * 2)




Given(/^I enter valid credentials$/, async function(){
  console.log("Entering valid credentials...");


  const landingPageActions: LandingPageActions = new landingPageActions();

  await goto(fixture.page, "https://www.google.com/")
  await landingPageActions.loginUser("sda", "ds");

});


Given('User navigates to the application', async function () {
   // await fixture.page.goto(process.env.BASEURL);
  //  fixture.logger.info("Navigated to the application");

    
})



Then('Login should be success', async function () {
    const user = fixture.page.locator("//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]//span[1]");
    await expect(user).toBeVisible();
    const userName = await user.textContent();
    console.log("Username: " + userName);
 //   fixture.logger.info("Username: " + userName);
})

When('Login should fail', async function () {
    const failureMesssage = fixture.page.locator("mat-error[role='alert']");
    await expect(failureMesssage).toBeVisible();
});


// ;;

When("I log in as {string} with ID {float} and active status {string}", (value1: string, value2: number, value3: string) => {
  
  const isActive: boolean = value3.toLowerCase() === "true";
  
  console.log(`Clicking login button ${value1} , ${value2}, ${isActive})} ,  `);
});


When(/^I have (\d+) (true|false) "([^"]+)"(s)?$/, function (value1: number, value3: boolean, value2: string, dummy?: string) { 

  // "([^"]+)" - string
  // (\d+) - integers
  // (true|false) - boolean
  if(dummy === "undefined" || dummy === null)
    dummy = '';
  console.log(`I have ${value1} , ${value3},  ${value2}${dummy}`);

  if(value3.toString() === "true")
    console.log(`If ::::: ${value3} has ${value1} :::::: `);
  
});

Then("I should see the dashboard", function () {
  console.log("Dashboard is displayed.");

});



