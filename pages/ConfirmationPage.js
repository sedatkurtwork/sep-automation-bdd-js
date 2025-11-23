import { BasePage } from "./BasePage.js";

export class ConfirmationPage extends BasePage {
  constructor(page) {
    super(page);

    this.confirmationHeader = page.locator(
      "//h1[contains(., 'Enrollment Confirmation')]"
    );
    this.programNameText = page.locator(
      "//div[contains(@class,'program-name')]"
    );
    this.emailText = page.locator("//div[contains(@class,'email')]");
    this.companyContactText = page.locator(
      "//div[contains(@class,'company-contact')]"
    );
  }
}
