import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("only one upfront payment option should be displayed", async function () {
  // Wait for the element to be visible first
  await page.waitForTimeout(2000);

  await expect(paymentPlanPage.upfrontPaymentAmount).toHaveCount(1);
});

Then(
  "the upfront payment description should match the format {string}",
  async function (price) {
    let actualPrice = await paymentPlanPage.upfrontPaymentAmount.innerText();
    console.log("actual price = ", actualPrice);
    expect(actualPrice).toBe(price);
  }
);

Then(
  "only one installment payment plan should be displayed",
  async function () {
     await page.waitForTimeout(2000);

     await expect(paymentPlanPage.installmentsPaymentAmount).toHaveCount(1);
  }
);

Then(
  "the installment plan price should match the format {string}",
  async function (price) {

        let actualPrice =
          await paymentPlanPage.installmentsPaymentAmount.innerText();
        console.log("actual price = ", actualPrice);
        expect(actualPrice).toBe(price);
   
  }
);
