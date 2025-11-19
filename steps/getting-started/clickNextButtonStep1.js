import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { start } from "repl";

  //      # Green Hex Code:  rgb(172, 245, 138)
   //     # Blue Hex Code:  rgb(1, 201, 255)

When("user enters the first name", async function () {
  // fill first-name field
  let nameInput = startApplicationPage.firstNameInputBox;
  await nameInput.fill("haci");
});

When("user enters the last name", async function () {
  // fill last-name field
  let lastNameInput = startApplicationPage.lastNameInputBox;
  await lastNameInput.fill("haciogullarindan");
});

When("user enters the email address", async function () {
  let emailInput = startApplicationPage.emailInputBox;
  await emailInput.fill("haci@hacioglu.com");
});

When("user enters phone number", async function () {
  let phoneNumberInput = startApplicationPage.phoneNumberInputBox;
  await phoneNumberInput.fill("5554443322");
});

When("user selects from How did you hear about us?", async function () {
  let howDidYouHearDropdown = startApplicationPage.howDidYouHearAboutUsDropDown;
  await howDidYouHearDropdown.click();
  await startApplicationPage.emailOptionFromDropDown.click();
  // await page.waitForTimeout(3000);
});

When("user clicks Next button on start application step", async function () {
  await startApplicationPage.nextButton.click();
  // await page.waitForTimeout(3000);
});

Then(
  "the start application stepper circle color should be green",
  async function () {
    // await paymentPlanPage.UpfrontText.first().isVisible();
    await expect(paymentPlanPage.UpfrontText.first()).toBeVisible();
    const circle = startApplicationPage.startApplicationStepCircle;

    const bgColor = await circle.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    page.waitForTimeout(3);
    console.log("Green Stepper circle color:", bgColor);
    // await page.waitForTimeout(3000);
    expect(bgColor).toBe("rgb(172, 245, 138)");
  }
);

Then(
  "the payment plan stepper circle color should be blue",
  async function () {

    const circle = startApplicationPage.paymentPlanStepCircle;

    const bgColor = await circle.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    console.log("Blue Stepper circle color:", bgColor);

    expect(bgColor).toBe("rgb(1, 201, 255)");
  }
);

When(
  "user leaves the How did you hear about us field empty",
  async function () {}
);

Then(
  "the user should be navigated to the payment plan page",
  async function () {
    await expect(paymentPlanPage.UpfrontText.first()).toBeVisible();
    let chooseAPaymentPlanText = paymentPlanPage.chooseAPaymentPlanText;
    await expect(chooseAPaymentPlanText).toBeVisible();
  }
);
