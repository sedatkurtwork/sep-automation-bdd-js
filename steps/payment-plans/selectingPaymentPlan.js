import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("that payment plan option should be highlighted", async function () {
  await expect(paymentPlanPage.upfrontPaymentFrame).toHaveAttribute(
    "aria-expanded",
    "true"
  );
});

When("user clicks the first payment plan option", async function () {
//   await page.waitForTimeout(2000);
  await paymentPlanPage.selectPaymentPlan("upfront");
});

When("user clicks the second payment plan option", async function () {
//   await page.waitForTimeout(2000);
  await paymentPlanPage.selectPaymentPlan("installments");
});

Then("the second payment plan option should be highlighted", async function () {
//   await page.waitForTimeout(2000);
  await expect(paymentPlanPage.installmentsPaymentFrame).toHaveAttribute(
    "aria-expanded",
    "true"
  );
});

Then(
  "the first payment plan option should not be highlighted",
  async function () {
    // await page.waitForTimeout(2000);
    await expect(paymentPlanPage.upfrontPaymentFrame).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  }
);
