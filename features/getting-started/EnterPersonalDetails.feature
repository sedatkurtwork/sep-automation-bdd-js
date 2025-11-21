@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep10-1
    Scenario: Verify personal detail fields and validation - first name
        Then the First Name field should be displayed as a text field

    @sep10-2
    Scenario: Verify personal detail fields and validation - last name
        Then the Last Name field should be displayed as a text field

    @sep10-3
    Scenario: Verify personal detail fields and validation - email field
        Then the Email Address field should be displayed as a text field
        And the Email Address field should validate email format

    @sep10-4
    Scenario: Verify personal detail fields and validation - phone 
        Then the phone field should be displayed as a number field
   

    @sep10-5
    Scenario: Verify "How did you hear about us?" dropdown is present
        Then the "How did you hear about us?" field should be displayed as a dropdown list

    @sep10-6
    Scenario: Ensure 'Next' button is disabled when required fields are missing
        When the user leaves any required field empty
        Then the Next button should be disabled    
