import { expect, Page } from "@playwright/test";

import { LandingPageLocators } from "../locators/landingPageLocators";
import { goto, waitAndClick } from "../../helper/wrapper/PlaywrightWrappers";


export class LandingPageActions {

    landingPage: LandingPageLocators;

    constructor() {
       
    }

  /*  constructor(private page: Page) {
        this.page = page;
        this.landingPage = new LandingPageLocators(page)
    }*/

    private Elements = {
        userInput: "Username",
        passwordInput: "Password",
        loginBtn: "button[color='primary']",
        errorMessage: "alert"
    }

    /*
    async verifyUrlContainsBenefitsSummaryText() {
        await verifyPageContainsUrl(this.page, Constants.BenefitsSummaryPage.BENEFITS_SUMMARY_PAGE_URL,
            `Verify Benefits Summary Page Url contains ${Constants.BenefitsSummaryPage.BENEFITS_SUMMARY_PAGE_URL}`)
    }

    async waitForBenefitsSummaryHeaderVisibility() {
        await waitForElementVisible(this.benefitsSummaryPageLocators.getBenefitsSummaryHeaderText())
    }

    async waitForIAcceptTheseChangesButtonVisibility() {
        await waitForElementVisible(this.benefitsSummaryPageLocators.getIAcceptTheseChangesButton())
    }

    async verifyBenefitsSummaryTitleHeader() {
        await verifyElementIsVisible(this.benefitsSummaryPageLocators.getBenefitsSummaryHeaderText())
        await verifyElementToHaveText(this.benefitsSummaryPageLocators.getBenefitsSummaryHeaderText(),
            Constants.BenefitsSummaryPage.BENEFITS_SUMMARY_PAGE_HEADER_TEXT)
    }
    
    */


    async navigateToLoginPage() {
        await goto(this.page, "/login");
        await expect(this.page).toHaveTitle("BookCart");
    }
    async enterUserName(user: string) {
        await this.page.getByLabel(this.Elements.userInput).fill(user);
    }
    async enterPassword(Password: string) {
        await this.page.getByLabel(this.Elements.passwordInput).fill(Password);
    }

    async clickLoginButton() {
        await waitAndClick(this.page, this.Elements.loginBtn);
    }

    getErrorMessage() {
        return this.page.getByRole("alert");
    }

    async loginUser(user: string, password: string) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();

        // await page.goto("https://example.com");
        
        // // Wait for network requests to settle
        // await page.waitForLoadState("networkidle");

        // // Wait for a specific element to appear
        // await page.waitForSelector(".product-item", { state: "visible" });

        // // Wait for an API response
        // await page.waitForResponse((res) => res.url().includes("/api/products") && res.status() === 200);

        // // Wait for loading spinner to disappear
        // await page.waitForSelector(".loading-spinner", { state: "hidden" });

        // console.log("All dynamic content is loaded, proceeding...");
    }


}