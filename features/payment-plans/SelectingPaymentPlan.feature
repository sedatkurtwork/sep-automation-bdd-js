@sep14 @regression
Feature: Selecting a price plan

    As a customer, I want to be able to Choose a payment plan from the available options
    so that I can choose the one that best suits my needs.

    #* AC1: When the user selects any payment plan (Accordion) that option should be highlighted to indicate selection.
    #* AC2: Upon selecting any pricing option, the 'Next' button should become active (indicating the user can proceed).
    #* AC3: Users should be able to change their plan selections at any time before finalizing their choice.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        And user is on step two of the enrollment process

    @sep14-1
    Scenario: Selecting a payment plan should highlight the chosen plan
        When user selects a payment plan
        Then that payment plan option should be highlighted

    @sep14-2
    Scenario: Selecting a payment plan should activate the Next button
        When user selects a payment plan
        Then the next button on payment plan step should become enabled

    @sep14-3 @smoke
    Scenario: User should be able to change their payment plan selection
        When user clicks the first payment plan option
        And user clicks the second payment plan option
        Then the second payment plan option should be highlighted
        And the first payment plan option should not be highlighted