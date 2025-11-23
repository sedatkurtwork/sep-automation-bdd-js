import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page, leftMainPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
// import { off } from "process";

Then("the page should display the text {string}", async function (string) {
    const EXPECT = "Secure checkout"; 
    const ACTUAL = (await leftMainPage.secureCheckout.innerText()).trim();

    console.log("actual security text: ", ACTUAL);
    expect(ACTUAL).toBe(EXPECT);
    await expect(leftMainPage.cydeoImageAtLeftWindow).toBeVisible();
});

Given("the page should display the program name", async function () {
    const EXPECT = productInfo.programName;
    const ACTUAL = await leftMainPage.programName.innerText();

    expect(ACTUAL).toBe(EXPECT);

});

Given(
  "the footer on the left side of the page should include the logo",
  async function () {
    await expect(leftMainPage.cydeoLogoAtLeftWindow).toBeVisible();
  }
);



Then(
  "The footer items should appear in the correct order",
  async function (dataTable) {
    const expectedItems = dataTable.raw().flat();
    const footerItems = await leftMainPage.footerElements.allInnerTexts();

    for (let i = 0; i < expectedItems.length; i++) {
      expect(footerItems[i]).toContain(expectedItems[i]);
    }
  }
);


Given(
  "the page should display {string} in the footer on the right.",
  async function (helpMessage) {
    const HELP_MESSAGE = await startApplicationPage.footer.first().innerText();

    expect(HELP_MESSAGE).toBe(helpMessage);


  }
);
