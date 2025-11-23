@sep17
Feature: View payment plan options in Step 2   #! test only

    As a customer, I should be able to see payment plan options in Step 2.

    #* AC1: Upfront payment:
    #*      There should be only one upfront price
    #*      Text should be:
    #*              Upfront  (first row)
    #*              $ <upfont_price> pay once (second row)

    #* AC2: Installment plans:
    #*      There must be total <num> Payment Plans
    #*      There can be <number_of_installments> installments
    #*      If there are installments:
    #*            Text should be
    #*            <number_of_installments> Installments (first row)
    #*           $ <monthly_price> per month (second row)
    #*            Installment plans should be unique

    #TODO: Create scenarios that cover all the acceptance criteria

    # ================================
    # AC1 – Upfront payment validation
    # ================================
    Background:
        Given user is on the enrollment page
        And user has completed step one with valid information
        And user is on step two of the enrollment process

    @sep17-1
    Scenario: Upfront payment should display correct text and format
        Then only one upfront payment option should be displayed
        And the upfront payment description should match the format "$400 pay once"


    # ====================================
    # AC2 – Installment plan validations
    # ====================================
    @sep17-2
    Scenario: Installment plan should display 5 Installments with correct price format
        Then only one installment payment plan should be displayed
        And the installment plan price should match the format "$100 per month"

    # ======================================
    # Selection test (already implemented)
    # ======================================
    @sep14-3
    Scenario: User should be able to change their payment plan selection
        When user clicks the first payment plan option
        And user clicks the second payment plan option
        Then the second payment plan option should be highlighted
        And the first payment plan option should not be highlighted






