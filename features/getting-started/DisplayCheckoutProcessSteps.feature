@sep08 @regression
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep08-1
    Scenario: Verify checkout process stepper displays all steps and highlights the current step
        Then the stepper should display Start Application
        And the stepper should display Payment Plan
        And the stepper should display Review

    @sep08-2
    Scenario:  Verify that system should highlight "Start Application" in blue.
        And the stepper should highlight Start Application in blue

    @sep08-3
    Scenario:  Verify that system should highlight "Start Application"
        And the stepper should display Payment Plan in grey
        And the stepper should display Review in grey
