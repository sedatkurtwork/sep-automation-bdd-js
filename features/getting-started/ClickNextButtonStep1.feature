@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        When user enters the first name
        And user enters the last name
        And user enters the email address
        And user enters phone number

    @sep19-1
    Scenario: Verify that clicking next button after providing all the personal information info will navigates the user to payment plan page
        And user selects from How did you hear about us?
        And user clicks Next button on start application step
        Then the start application stepper circle color should be green
        And the payment plan stepper circle color should be blue

    @sep19-2
    Scenario: Navigate to payment plan with only required fields provided
        And user leaves the How did you hear about us field empty
        And user clicks Next button on start application step
        Then the user should be navigated to the payment plan page
        Then the start application stepper circle color should be green
        And the payment plan stepper circle color should be blue
