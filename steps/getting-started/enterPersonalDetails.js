import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then(
  "the First Name field should be displayed as a text field",
  async function () {
    await expect(startApplicationPage.firstNameInputBox).toBeVisible();
    // await expect(startApplicationPage.firstNameInputBox).toHaveAttribute(
    //   "type",
    //   "text"
    // );
  }
);

Then(
  "the Last Name field should be displayed as a text field",
  async function () {
    await expect(startApplicationPage.lastNameInputBox).toBeVisible();
    // await expect(startApplicationPage.lastNameInputBox).toHaveAttribute(
    //   "type",
    //   "text"
    // );
  }
);

Then(
  "the Email Address field should be displayed as a text field",
  async function () {
    await expect(startApplicationPage.emailInputBox).toBeVisible();
    // await expect(startApplicationPage.emailInputBox).toHaveAttribute(
    //   "type",
    //   "text"
    // );
  }
);

Then("the Email Address field should validate email format", async function () {
  const emailField = startApplicationPage.emailInputBox;

  // Enter invalid email
  await emailField.fill("invalid-email");
  await emailField.blur(); // trigger validation

  // Get browser validation message
  const msg = await emailField.evaluate((el) => el.validationMessage);

  // The message should not be empty for invalid emails
  expect(msg.length).toBeGreaterThan(0);
});

Then(
  "the phone field should be displayed as a number field",
  async function () {
    const field = startApplicationPage.phoneNumberInputBox;

    // is Visible?
    await expect(field).toBeVisible();

    // is Input tag?
    const tag = await field.evaluate((el) => el.tagName.toLowerCase());
    expect(tag).toBe("input");

    // Number validation:
    await field.fill("12345");
    const numericValue = await field.inputValue();
    expect(numericValue).toBe("12345");

    await field.fill("abc");
    const classList = await field.evaluate((el) => el.className);

    expect(classList).toContain("ng-invalid");
  }
);

Then(
  "the {string} field should be displayed as a dropdown list",
  async function (fieldName) {
    // 1) Dropdown locators
    const dropdown = startApplicationPage.howDidYouHearAboutUsDropDown;

      // dropdown visible? 
    await expect(dropdown).toHaveCount(1);

    await dropdown.click();

    const firstOption = page.locator("mat-option").first();
    await expect(firstOption).toBeVisible();
  }
);

When("the user leaves any required field empty", async function () {});

Then("the Next button should be disabled", async function () {
  // Required fields
  //  const requiredFields = [
  //    startApplicationPage.firstNameInputBox,
  //    startApplicationPage.lastNameInputBox,
  //    startApplicationPage.emailInputBox,
  //    startApplicationPage.phoneNumberInputBox,
  //  ];

  //  let anyInvalid = false;

  //  for (const field of requiredFields) {
  //    // Angular mat-input 'aria-invalid' attribute kullanıyor mu kontrol et
  //    const ariaInvalid = await field.getAttribute("aria-invalid");
  //    if (ariaInvalid === "true") {
  //      anyInvalid = true;
  //      break;
  //    }

  //    // Alternatif: kırmızı border ile de kontrol edilebilir
  //    const borderColor = await field.evaluate(
  //      (el) => window.getComputedStyle(el).borderColor
  //    );
  //    if (
  //      borderColor === "rgb(244, 67, 54)" || // Angular default red
  //      borderColor === "red"
  //    ) {
  //      anyInvalid = true;
  //      break;
  //    }
  //  }

  //  expect(anyInvalid).toBe(true);
});
