import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

// Enter valid card number
When("user enters a valid card number", async function () {
  await reviewPaymentPage.enterCardNumber();
});

// Enter expiration date
When("user enters a valid expiration date", async function () {
//   await page.waitForTimeout(2000);
  await reviewPaymentPage.enterExpiryDate();
});

// Enter ZIP code
When("user enters a valid ZIP code", async function () {
//   await page.waitForTimeout(2000);
//   let zipCode = process.env.ZIP_CODE;
//   console.log(`zipCode is ${process.env.ZIP_CODE}`);
//   await reviewPaymentPage.zipCodeInput.fill(process.env.ZIP_CODE);
await reviewPaymentPage.enterZipCode();
});

// Enter invalid/short CVC
When("user enters a short CVC number {string}", async function (cvc) {
//   await page.waitForTimeout(2000);
  console.log(`short zipCode is ${cvc}`);
  await reviewPaymentPage.cvcInput.fill(cvc);
});

// When("user enters an invalid CVC number {string}", async function (cvc) {
//   await page.waitForTimeout(2000);
//   console.log(`invalid zipCode is ${cvc}`);
//   await reviewPaymentPage.cvcInput.fill(cvc);
// });

// Pay button and terms checkbox are already implemented

// Assert CVC error
Then(
  "an security code error message {string} should be displayed",
  async function (expectedMessage) {
    // Access the locator from your POM
    const errorMessage = reviewPaymentPage.cardCVCErrorMessage;

    // Make sure the element exists and is visible
    await expect(errorMessage).toBeVisible();

    // Normalize curly quotes and compare safely
    const actualText = await errorMessage.innerText();

    const normalizedActual = actualText.replace(/’/g, "'");
    const normalizedExpected = expectedMessage.replace(/’/g, "'");

    expect(normalizedActual).toContain(normalizedExpected);
  }
);
