import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When("user enters a valid CSV number", async function () {
  await reviewPaymentPage.enterCVC();
});

When(
  "user enters an incomplete expiration date {string}",
  async function (date) {
    await reviewPaymentPage.expiryDateInput.fill(date);
  }
);

When("user enters an invalid expiration date {string}", async function (date) {
  await reviewPaymentPage.expiryDateInput.fill(date);
});

Then(
  "the expiration date error message {string} should be displayed",
  async function (expectedMessage) {
    const locator = reviewPaymentPage.cardExpiryErrorMessage;

    await expect(locator).toBeVisible({ timeout: 7000 });

    // Normalize apostrophes so ’ and ' do not cause mismatch
    const normalize = (text) => text.replace(/’/g, "'");

    const actual = normalize(await locator.innerText());
    const expected = normalize(expectedMessage);

    expect(actual).toContain(expected);
  }
);
