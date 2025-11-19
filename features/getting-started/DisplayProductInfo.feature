@sep09
Feature: Display the product information

    As a customer, I should be able to see the product information.

    #* AC1: The product name should be displayed on the information card.
    #* AC2: The product name on the information card matches the product name on the left side of the screen.
    #* AC3: The price of the product should be displayed.
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    #* AC5: The program start date should be displayed.
    #* AC6: The return policy and the final date for returns should be displayed.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    Scenario: Verify product information card displays correct details
        Then the product name should be displayed on the information card
        And the product name on the information card should match the product name on the left side of the screen
        And the price of the product should be displayed
        And the text indicating a flexible payment plan should be displayed
        And the program start date should be displayed
        And the return policy should be displayed
        And the final date for returns should be displayed    
