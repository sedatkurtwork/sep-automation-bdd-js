import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import {
  confirmationPage,
  startApplicationPage,
} from "../../globalPagesSetup.js";

// -------------------------
// BACKGROUND STEPS ALREADY DONE BEFORE
// -------------------------

// When("user enters a valid CSV number", async function () {
//   await reviewPaymentPage.enterCVC();
// });

// When("user checks the terms and conditions checkbox", async function () {
//   await reviewPaymentPage.clickTermsAndConditionsCheckbox();
// });

// When("user clicks the pay button", async function () {
//   await reviewPaymentPage.clickPayButton();
// });

// -------------------------
// VALIDATIONS FOR SUCCESSFUL PAYMENT
// -------------------------

Then("user should be redirected to the confirmation page", async function () {
  await confirmationPage.confirmationHeader.waitFor({ timeout: 15000 });
  const text = await confirmationPage.confirmationHeader.innerText();
  expect(text).toContain("Enrollment Confirmation");
});

// STEP 1 → 2 → 3 should be solid green
Then("the stepper should show all steps as completed", async function () {
  const completedColor = "rgb(0, 150, 0)"; // solid green

  const steps = [
    startApplicationPage.startApplicationStepCircle,
    startApplicationPage.paymentPlanStepCircle,
    startApplicationPage.reviewStepCircle,
  ];

  for (const step of steps) {
    const bgColor = await step.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );
    expect(bgColor).toBe(completedColor);
  }
});

Then("the program name should be correctly displayed", async function () {
  const expectedProgramName = productInfo.programName;
  const actualProgramName = await confirmationPage.programNameText.innerText();
  expect(actualProgramName).toBe(expectedProgramName);
});

Then("the user email should be correctly displayed", async function () {
  const expectedEmail = process.env.SEP_USERNAME;
  const actualEmail = await confirmationPage.emailText.innerText();
  expect(actualEmail).toBe(expectedEmail);
});

Then(
  "the company contact information should be correctly displayed",
  async function () {
    const expected = productInfo.companyContact;
    const actual = await confirmationPage.companyContactText.innerText();
    expect(actual).toContain(expected);
  }
);
