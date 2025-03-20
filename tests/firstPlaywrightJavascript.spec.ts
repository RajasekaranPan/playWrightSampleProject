import {test, expect} from '@playwright/test';

import * as testData from './test-data/input.json';

//const testDataaa = ['apple', 'banana', 'cherry']; 

test.describe.skip('Data-Driven Test', async () => {

    
    test('our first test case', async ({page}) => {

    await page.goto('https://jobs.citi.com/');

    await page.setExtraHTTPHeaders({Authorization: `Basic ` + btoa('username:password')});

    await page.getByPlaceholder("Search by Keyword").scrollIntoViewIfNeeded();
     
    await page.waitForTimeout(3000);

     page.getByPlaceholder("Search by Keyword").fill("Quality").then(()=> {

     page.getByPlaceholder("Search by Location").type("chennai"); }).then(()=> {

    page.locator("ul.mindreader-results > li:nth-child(1) > a").click() }).then(() => {

    page.locator("xpath=//button[text()='Search Jobs']").click({force: true}); })
    .catch( (error) => {console.log("ennatha solla da: ", error)});
    
   
   

     await page.waitForLoadState('load');

    await page.waitForURL(/search-jobs/);

    await page.locator("css=section#search-results-list li:nth-child(1) > a").click();

     await page.getByRole('link', {name: 'Apply Now'}).first().click();

     await page.waitForURL(/myworkdayjobs/);

     //await page.waitForTimeout(5000);

     const keywords = testData[0].keywords;

     /*
     for(let keyword of keywords){
     
       
        await page.getByTestId('email').fill(keyword);

     await page.getByTestId('password').fill('Rajalove#7');

     await page.getByTestId('click_filter').dblclick();

     await page.getByTestId('email').clear();

     }
     */



});


test('our second test case', async ({page}) => {

    await page.goto('https://jobs.citi.com/');

    await page.getByPlaceholder("Search by Keyword").scrollIntoViewIfNeeded();
     
    await page.waitForTimeout(3000);

     page.getByPlaceholder("Search by Keyword").fill("Quality").then(()=> {

     page.getByPlaceholder("Search by Location").type("chennai"); }).then(()=> {

    page.locator("ul.mindreader-results > li:nth-child(1) > a").click() }).then(() => {

    page.locator("xpath=//button[text()='Search Jobs']").click(); })
    .catch( (error) => {console.log("ennatha solla da: ", error)});
    
   
   

     await page.waitForLoadState('load');

    await page.waitForURL(/search-jobs/);

    await page.locator("css=section#search-results-list li:nth-child(1) > a").click();

     await page.getByRole('link', {name: 'Apply Now'}).first().click();

     await page.waitForURL(/myworkdayjobs/);

     //await page.waitForTimeout(5000);

     const keywords = testData[0].keywords;

     /*
     for(let keyword of keywords){
     
       
        await page.getByTestId('email').fill(keyword);

     await page.getByTestId('password').fill('Rajalove#7');

     await page.getByTestId('click_filter').dblclick();

     await page.getByTestId('email').clear();

     }
     */



});


test('our third test case', async ({page}) => {

    await page.goto('https://jobs.citi.com/');

    await page.getByPlaceholder("Search by Keyword").scrollIntoViewIfNeeded();
     
    await page.waitForTimeout(3000);

     page.getByPlaceholder("Search by Keyword").fill("Quality").then(()=> {

     page.getByPlaceholder("Search by Location").type("chennai"); }).then(()=> {

    page.locator("ul.mindreader-results > li:nth-child(1) > a").click() }).then(() => {

    page.locator("xpath=//button[text()='Search Jobs']").click(); })
    .catch( (error) => {console.log("ennatha solla da: ", error)});
    
   
   

     await page.waitForLoadState('load');

    await page.waitForURL(/search-jobs/);

    await page.locator("css=section#search-results-list li:nth-child(1) > a").click();

     await page.getByRole('link', {name: 'Apply Now'}).first().click();

     await page.waitForURL(/myworkdayjobs/);

     //await page.waitForTimeout(5000);

     const keywords = testData[0].keywords;

     /*
     for(let keyword of keywords){
     
       
        await page.getByTestId('email').fill(keyword);

     await page.getByTestId('password').fill('Rajalove#7');

     await page.getByTestId('click_filter').dblclick();

     await page.getByTestId('email').clear();

     }
     */



});

test('our fourth test case', async ({page}) => {

    await page.goto('https://jobs.citi.com/');

    await page.getByPlaceholder("Search by Keyword").scrollIntoViewIfNeeded();
     
    await page.waitForTimeout(3000);

     page.getByPlaceholder("Search by Keyword").fill("Quality").then(()=> {

     page.getByPlaceholder("Search by Location").type("chennai"); }).then(()=> {

    page.locator("ul.mindreader-results > li:nth-child(1) > a").click() }).then(() => {

    page.locator("xpath=//button[text()='Search Jobs']").click(); })
    .catch( (error) => {console.log("ennatha solla da: ", error)});
    
   
   

     await page.waitForLoadState('load');

    await page.waitForURL(/search-jobs/);

    await page.locator("css=section#search-results-list li:nth-child(1) > a").click();

     await page.getByRole('link', {name: 'Apply Now'}).first().click();

     await page.waitForURL(/myworkdayjobs/);

     //await page.waitForTimeout(5000);

     const keywords = testData[0].keywords;

     /*
     for(let keyword of keywords){
     
       
        await page.getByTestId('email').fill(keyword);

     await page.getByTestId('password').fill('Rajalove#7');

     await page.getByTestId('click_filter').dblclick();

     await page.getByTestId('email').clear();

     }
     */



});

test('our fifth test case', async ({page}) => {

    await page.goto('https://jobs.citi.com/');

    await page.getByPlaceholder("Search by Keyword").scrollIntoViewIfNeeded();
     
    await page.waitForTimeout(3000);

     page.getByPlaceholder("Search by Keyword").fill("Quality").then(()=> {

     page.getByPlaceholder("Search by Location").type("chennai"); }).then(()=> {

    page.locator("ul.mindreader-results > li:nth-child(1) > a").click() }).then(() => {

    page.locator("xpath=//button[text()='Search Jobs']").click(); })
    .catch( (error) => {console.log("ennatha solla da: ", error)});
    
   
   

     await page.waitForLoadState('load');

    await page.waitForURL(/search-jobs/);

    await page.locator("css=section#search-results-list li:nth-child(1) > a").click();

     await page.getByRole('link', {name: 'Apply Now'}).first().click();

     await page.waitForURL(/myworkdayjobs/);

     //await page.waitForTimeout(5000);

     const keywords = testData[0].keywords;

     /*
     for(let keyword of keywords){
     
       
        await page.getByTestId('email').fill(keyword);

     await page.getByTestId('password').fill('Rajalove#7');

     await page.getByTestId('click_filter').dblclick();

     await page.getByTestId('email').clear();

     }
     */



});
}); //end of describe

/*

const {chromium} = require('playwright');
const { test, expect} = require('@playwright/test');
const fs = require('fs')

test('javascript test', async() => {


    const browser = await chromium.launch('./storageforcache', {  headless: false});

    const context = await browser.newContext()
    const page = await context.newPage();


    await page.goto('https://www.amazon.in');

    await page.waitForURL(/amazon/);

    await expect(page).toHaveURL(/.*amazon/);

    await expect(page.getByText('Mobiles')).toBeVisible();


    
    //await page.locator('input[name="username"]', {hasText: 'UserName' }).click();

    //element handle way - this way dont wait for element to be visible 
    // await page.$({selector: 'input[name="username"]'}).click();

    // //To handle dynamic locator
    // await expect(page.locator('id^="Mobiles"')).toBeVisible();

    // await page.locator('select#dropdown"').selectOption('vlaue');

    // await page.locator('input#checkbox"').check();

    // //How to handle frames
    // await page.frameLocator('iframe#frame').locator('button#submit').click();

    // const shadownelement = await page.locator('css=element-with-shadow-dom >> shadow-root-element');
    // shadownelement.click();



    await page.screenshot({path: './screenshot/demo.png', fullPage: true});

 await page.getByText('Mobiles').screenshot({path: './screenshot/demo1.png' });



 // Playwright test runnner

 // 1. Parallel test execution -> fullyParallel, worker
 // 2. Built in auto waiting  
 // 3. Retry
 // 4. Assertions
 // 5. Hooks


 // Playwright trace viewer 

 // await context.tracing.start({screenshots: true, snapshots: true});
 //await context.tracing.stop({path: './trace'});

//use :{trace 'on'}



// Hooks in playwirght

// 1. test.beforeAll - runs once before all tests
//2. test.afterAll -  runs once after all tests
// 3. test.beforeEach -  runs once before each tests
// 4. test.afterEach -  -  runs once after each tests
// 5. test


// Quesion # 26 
// Image comparison 

// , #30
// Mock network request using page.route , route.fulfill

// Grouping
// test.describe()
// {
//     test()
//     {

//     }
//     test()
//     {

//     }
// }


await page.locator('').setInputFiles('location');


await page.locator('').hover();
await page.keyboard.press('Enter');
await page.keyboard.press('Delete');


const [downloaded] = await Promise.all([
    page.waitForEvent('download'),
    page.locator.click('a#downloadLink')
])

await downloaded.saveAs('path');

//persist the authentication state afer loign



// //in Test 1
// await page.content().storageState({path: 'auth.json'});

// //in Test 2
// test.use({browserName: 'chromium', storageState: 'auth.json'}, async() => {
// await page.content().storageState({path: 'auth.json'})
// });



page.bringToFront();



    await page.close()


    await context.close();

    await browser.close();

})
*/



test.only('Update test result at runtime', async ({ page }, testInfo) => {
  await page.goto('https://example.com');

  // Check an API response and decide test status
  
  /*
  const response = await page.request.get('https://example.com/api/status');
  let status = await response.text();

  console.log(status);

  //status = 'maintenance';

  if (status === 'maintenance') {

    testInfo.annotations.push({ type: 'blocked', description: 'Test skipped due to maintenance mode' });
    testInfo.errors.push(new Error('Login button is missing!'));

    test.skip();
  }

  */
  page.on('console', msg => console.log(`Console Log: ${msg.text()}`));

  await page.goto('https://amazon.in');
  await page.evaluate(() => console.log('Hello from the browser!'));

  await page.waitForTimeout(30000);



});