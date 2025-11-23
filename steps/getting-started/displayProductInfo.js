import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, leftMainPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then(
  "the product name should be displayed on the information card",
  async function () {
    await expect(leftMainPage.programName).toBeVisible();

  }
);

Then(
  "the product name on the information card should match the product name on the left side of the screen",
  async function () {

    let expectedProductName = productInfo.productName;
    let actualProductName = await leftMainPage.programName.innerText();

    expect(actualProductName).toBe(expectedProductName);
  }
);

Then("the price of the product should be displayed", async function () {
  let programPriceText =  startApplicationPage.programPrice;
  await expect(programPriceText).toBeVisible();

});

Then(
  "the text indicating a flexible payment plan should be displayed",
  async function () {
    let flexiblePaymentPlanText =
      startApplicationPage.flexiblePaymentsPlanAvailableText;
    await expect(flexiblePaymentPlanText).toBeVisible();
  }
);

Then("the program start date should be displayed", async function () {
    let programStartDate = startApplicationPage.programStartDate;
    await expect(programStartDate).toBeVisible();
});

Then(
  "the return policy and final date for returns should be displayed",
  async function () {
    let returnPolicy = startApplicationPage.refundEndDate;
    await expect(returnPolicy).toBeVisible();
  }
);
