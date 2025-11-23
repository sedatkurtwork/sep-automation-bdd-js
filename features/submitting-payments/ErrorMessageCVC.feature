@sep29 @regression
Feature: Error message for the invalid CVC number

    As a user, I want to be informed when the CVC number I enter is incorrect or too short.

    #* AC1: The Immediate error message should be thrown if the CVC number is too short or wrong. "Your card's security code is incomplete."


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        And user is on step two of the enrollment process
        And user selects a payment plan
        And user clicks the next button on payment plan step
        When user enters a valid card number
        And user enters a valid expiration date
        And user enters a valid ZIP code

    @sep29-1
    Scenario: CVC number is too short
        When user enters a short CVC number "1"
        And user checks the terms and conditions checkbox
        And user clicks the pay button
        Then an security code error message "Your card's security code is incomplete." should be displayed



    # @sep29-2
    # Scenario: CVC number is invalid
    #     When user enters an invalid CVC number "9999"
    #     And user checks the terms and conditions checkbox
    #     And user clicks the pay button
    #     Then an error message "Your card's security code is incomplete." should be displayed