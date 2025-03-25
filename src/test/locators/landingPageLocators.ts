import { Page } from "@playwright/test";

import { getElement } from "../../helper/wrapper/PlaywrightWrappers";

export class LandingPageLocators {

    constructor(private page: Page)
    {
        this.page = page;

    }


    getCongratulationsHeaderText = () => getElement(this.page, `#congratulationsTitle`)
    getReturnToHomeButton = () => getElement(this.page, `#homeRedirectionButton`);

}
