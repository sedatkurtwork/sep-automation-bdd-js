import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

// Step to enter card number
When("user enters a short card number {string}", async function (cardNumber) {
  await page.waitForTimeout(5000);
  await reviewPaymentPage.cardNumberInput.fill(cardNumber);
});

When(
  "user enters an invalid card number {string}",
  async function (cardNumber) {
    await page.waitForTimeout(5000);
    await reviewPaymentPage.cardNumberInput.fill(cardNumber);
  }
);

// Checks the terms and conditions checkbox
When("user checks the terms and conditions checkbox", async function () {
  await reviewPaymentPage.termsAndConditionsCheckbox.check();
});



// Click Pay button
When("user clicks the pay button", async function () {
  await reviewPaymentPage.payButton.click();
});

// Assert the error message
Then(
  "an error message {string} should be displayed",
  async function (expectedMessage) {
    const errorMessage = reviewPaymentPage.cardNumberErrorMessage;
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText(expectedMessage);
  }
);
