import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the stepper should display Start Application", async function () {
  const EXPECTED = "Start Application";
  const ACTUAL = await startApplicationPage.startApplicationText.innerText();
//   console.log("actual result: ", ACTUAL);
  expect(ACTUAL).toBe(EXPECTED);
});

Then("the stepper should display Payment Plan", async function () {
  const EXPECTED = "Payment plan";
  const ACTUAL = await startApplicationPage.paymentPlanText.innerText();
//   console.log("actual result: ", ACTUAL);
  expect(ACTUAL).toBe(EXPECTED);
});

Then("the stepper should display Review", async function () {
  const EXPECTED = "Review";
  const ACTUAL = await startApplicationPage.reviewText.innerText();
//   console.log("actual result: ", ACTUAL);
  expect(ACTUAL).toBe(EXPECTED);
});

Given(
  "the stepper should highlight Start Application in blue",
  async function () {
    const circle = startApplicationPage.startApplicationStepCircle;

    const bgColor = await circle.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    // console.log("Blue Stepper circle color:", bgColor);

    expect(bgColor).toBe("rgb(1, 201, 255)");
  }
);

Given("the stepper should display Payment Plan in grey", async function () {
  const circle = startApplicationPage.paymentPlanStepCircle;

  const bgColor = await circle.evaluate((el) => {
    return window.getComputedStyle(el).backgroundColor;
  });

//   console.log("GREY Stepper circle color:", bgColor);

  expect(bgColor).toBe("rgba(0, 0, 0, 0)");
});

Given("the stepper should display Review in grey", async function () {
  const circle = startApplicationPage.reviewStepCircle;

  const bgColor = await circle.evaluate((el) => {
    return window.getComputedStyle(el).backgroundColor;
  });

  console.log("GREY Stepper circle color:", bgColor);

  expect(bgColor).toBe("rgba(0, 0, 0, 0)");
});
