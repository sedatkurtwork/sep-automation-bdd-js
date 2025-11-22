@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be displayed.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        And user is on step two of the enrollment process

    @sep16-1
    Scenario: Clicking on any plan should activate the Next button
        When user clicks a payment plan option
        Then the next button on payment plan step should become enabled

    @sep16-2
    Scenario: Clicking Next navigates the user to Step 3 of the enrollment process
        When user selects a payment plan
        And user clicks the next button on payment plan step
        Then step three page should be displayed

    @sep16-3
    Scenario: Stepper should show steps 1 and 2 in green and step 3 in blue
        When user selects a payment plan
        And user clicks the next button on payment plan step
        Then step one stepper circle should be green
        And step two stepper circle should be green
        And step three stepper circle should be blue

    @sep16-4
    Scenario: Payment component should be displayed on Step 3
        When user selects a payment plan
        And user clicks the next button on payment plan step
        Then the payment component should be visible

    @sep16-5
    Scenario: Price summary should be displayed on Step 3
        When user selects a payment plan
        And user clicks the next button on payment plan step
        Then the price summary should be visible

    @sep16-6
    Scenario: Back button should be displayed on Step 3
        When user selects a payment plan
        And user clicks the next button on payment plan step
        Then the back button on Step 3 should be visible

    @sep16-7
    Scenario: Pay button should be displayed by default on Step 3
        When user selects a payment plan
        And user clicks the next button on payment plan step
        Then the pay button should be visible by default


