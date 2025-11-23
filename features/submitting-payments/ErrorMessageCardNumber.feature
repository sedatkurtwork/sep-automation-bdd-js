@sep25
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed. 

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        And user is on step two of the enrollment process
        And user selects a payment plan
        And user clicks the next button on payment plan step


    @sep25-1
    Scenario: Card number is too short
        When user enters a short card number "4222"
        And user checks the terms and conditions checkbox
        And user clicks the pay button
        Then an error message "Your card number is incomplete." should be displayed

    @sep25-2
    Scenario: Card number is invalid
        When user enters an invalid card number "4242424242425555"
        And user checks the terms and conditions checkbox
        And user clicks the pay button
        Then an error message "Your card number is invalid." should be displayed