import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  paymentPlanPage,
  page,
  startApplicationPage,
  reviewPaymentPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given("user has completed step one with valid information", async function () {
  await startApplicationPage.enterFirstName("Haci");
  await startApplicationPage.enterLastName("Hacioglu");
  await startApplicationPage.enterEmail("haci@hacioglu.com");
  await startApplicationPage.enterPhoneNumber("5554443322");
  await startApplicationPage.selectHowDidYouHearAboutUs("email");

  await startApplicationPage.clickNextButton();
});

Given("user is on step two of the enrollment process", async function () {
  expect(paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
});

When("user clicks a payment plan option", async function () {
  await paymentPlanPage.selectPaymentPlan("installments");
});

Then(
  "the next button on payment plan step should become enabled",
  async function () {
    await expect(paymentPlanPage.activeNextButton).toBeVisible();
  }
);

When("user selects a payment plan", async function () {
  await paymentPlanPage.selectPaymentPlan("installments");
});

When("user clicks the next button on payment plan step", async function () {
  await paymentPlanPage.activeNextButton.click();
});

Then("step three page should be displayed", async function () {

  page.waitForTimeout(3000);
  await expect(reviewPaymentPage.cardNumberInput).toBeVisible();
});

Then("step one stepper circle should be green", async function () {
await expect(reviewPaymentPage.cardNumberInput).toBeVisible();
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

Then("step two stepper circle should be green", async function () {
    const circle = startApplicationPage.paymentPlanStepCircle;

    const bgColor = await circle.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    page.waitForTimeout(3);
    console.log("Green Stepper circle color:", bgColor);
    // await page.waitForTimeout(3000);
    expect(bgColor).toBe("rgb(172, 245, 138)");
  }
);

Then("step three stepper circle should be blue", async function () {
    const circle = startApplicationPage.reviewStepCircle;

    const bgColor = await circle.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    // page.waitForTimeout(3000);
    console.log("Green Stepper circle color:", bgColor);
    // await page.waitForTimeout(3000);
    expect(bgColor).toBe("rgb(1, 201, 255)");

});

Then("the payment component should be visible", async function () {
  await expect(reviewPaymentPage.paymentForm).toBeVisible();

});

Then("the price summary should be visible", async function () {
  await expect(reviewPaymentPage.subtotalText).toBeVisible();

});

Then(
  "the back button on Step 3 should be visible",
  async function () {
    await expect(reviewPaymentPage.backButton).toBeVisible();

  }
);

Then("the pay button should be visible by default", async function () {
  await expect(reviewPaymentPage.payButton).toBeVisible();

});
