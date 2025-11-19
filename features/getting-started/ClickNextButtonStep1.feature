@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields
    

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    Scenario: Verify that the program start date and refund date are displayed
       Then the program start date is displayed
       And the program refund date is displayed      

    Scenario: Verify that the program start date and refund date are correct
        Then the program start date for the program is correct
        And the program refund date for the refund data is correct