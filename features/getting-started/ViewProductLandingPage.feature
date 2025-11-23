@sep07 @regression
Feature: View Product Landing Page

    As a customer, I should be able to see the product landing page.

    #* AC1: The system displays the text "Cydeo Secure Checkout".
    #* AC2: The system should display the program name.
    #* AC3: Users should see a footer on the left side of the page that includes by order: 
    #*      logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy
    
    #* AC4: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.


    #TODO: Create scenarios that cover all the acceptance criteria
    
    Background:
        Given user is on the enrollment page

    @sep07-1
    Scenario: Verify system displays the text "Cydeo Secure checkout".
        Then the page should display the text "Cydeo Secure checkout"
    
    @sep07-2 @smoke
    Scenario: Verify system should display the program name
        Then the page should display the program name

    @sep07-3
    Scenario: Scenario Outline name: Verify Users should see a footer on the left side of the page that includes by order
        Then the footer on the left side of the page should include the logo
        And The footer items should appear in the correct order
            | Terms and conditions |
            | Privacy Policy       |
            | Disclaimer           |
            | Cookie Policy        |


    @sep07-4
    Scenario: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.
        And the page should display "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.
