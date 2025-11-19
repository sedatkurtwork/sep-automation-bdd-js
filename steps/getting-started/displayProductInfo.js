import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Then(
  "the product name should be displayed on the information card",
  async function () {}
);

Then(
  "the product name on the information card should match the product name on the left side of the screen",
  async function () {}
);

Then("the price of the product should be displayed", async function () {});

Then(
  "the text indicating a flexible payment plan should be displayed",
  async function () {}
);

Then("the program start date should be displayed", async function () {});

Then("the return policy should be displayed", async function () {});

Then("the final date for returns should be displayed", async function () {});

