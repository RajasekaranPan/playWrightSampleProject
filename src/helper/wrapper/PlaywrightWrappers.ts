import { Locator, Page } from "@playwright/test";


    export async function getElement(page: Page, locatorText: string) {

        let locator: Locator
    
        try {
            locator = page.locator(locatorText)
            //TESTLOGGER.log.debug("Get Locator: Text - " + locatorText)
        } catch (e) {
           // TESTLOGGER.log.error("Unable to Get Locator: Text - " + locatorText + "\n" + e)
            throw e
        }
        return locator
    
    }


    export async function  waitForElementVisible(locator: Locator) {

        try {
            await locator.waitFor({ state: "visible" })
         //   TESTLOGGER.log.debug("Wait for Element Visible: Locator - " + locator)
        } catch (e) {
         //   TESTLOGGER.log.error("Wait for Element Visible Failed: Locator - " + locator + "\n" + e)
            //throw e
        }
    }


    export async function  goto(page: Page, url: string) {
        await page.goto(url, {
            waitUntil: "domcontentloaded"
        });
    }

    export async function  waitAndClick(page: Page, locator: string) {
        const element = page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    export async function  navigateTo(page: Page, link: string) {
        await Promise.all([
            page.waitForLoadState('domcontentloaded', {timeout: 50000}),
            page.click(link)
        ]).then(()=> {console.log("Succesfully Navigated... ")})
        .catch((error) => {console.log(error.message)});
    }
