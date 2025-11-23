@sep23 @regression
Feature: Make a payment

    As a customer, I should be able to make payments so I can enroll in the program.

    #* AC1: When the user enters valid card information, checks the terms and conditions checkbox,
    #*      and clicks on the Pay button, then they should be redirected to the confirmation page.

    #* AC2: In the stepper, steps 1, 2, 3 should be green.
    #* AC3: The correct program name should be displayed.
    #* AC4: The correct user email should be displayed.
    #* AC5: The correct company contact information should be displayed.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        And user is on step two of the enrollment process
        And user selects a payment plan
        And user clicks the next button on payment plan step
        When user enters a valid card number
        And user enters a valid expiration date
        And user enters a valid CSV number
        And user enters a valid ZIP code
        And user checks the terms and conditions checkbox
        And user clicks the pay button

    @sep23-1
    Scenario: User completes payment with valid information
        Then user should be redirected to the confirmation page
        And the stepper should show all steps as completed
        And the program name should be correctly displayed
        And the user email should be correctly displayed
        And the company contact information should be correctly displayed

