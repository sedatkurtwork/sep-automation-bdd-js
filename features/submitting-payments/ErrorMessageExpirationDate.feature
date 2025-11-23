@sep27
Feature: Error messages for the invalid expiration number

    As a user, I want to be informed when my card's expiration date has failed.


    #* AC1: 1. An immediate error message should be thrown if the expiration number is too short or wrong:
    #*                  Your card's expiration date is incomplete.
    #*                  Your card's expiration year is in the past.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        And user is on step two of the enrollment process
        And user selects a payment plan
        And user clicks the next button on payment plan step
        When user enters a valid card number
        And user enters a valid CSV number
        And user enters a valid ZIP code


    @sep27-1
    Scenario: User enters too short / incomplete expiration date
        When user enters an incomplete expiration date "12"
        And user checks the terms and conditions checkbox
        And user clicks the pay button
        Then the expiration date error message "Your card’s expiration date is incomplete." should be displayed

    @sep27-2
    Scenario: User enters an expiration year in the past
        When user enters an invalid expiration date "12/20"
        And user checks the terms and conditions checkbox
        And user clicks the pay button
        Then the expiration date error message "Your card’s expiration year is in the past." should be displayed