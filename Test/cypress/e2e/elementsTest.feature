Feature:  Perform actions on Elements

     Background: Open the application
     Given User opens the application

     
    Scenario: Verify user can enter new data into the table
        Given User navigates to "Elements"
        And User click on "Web Tables"
        When User click on "Add" button
        And Enter below input fields and hit submit
        Then Verify new row is created and appeared in the tables with all the provided information

    Scenario: Verify user can edit the row in a table
        Given User navigates to "Elements"
        And User click on "Web Tables"
        When User click on edit icon in the "2"nd row of the table that contains firstname "Alden"
        And User Edit the First Name to "Gerimedica" and Last Name to "BV" and Hit save
        Then Verify "2"nd row is successfully edited with First Name to "Gerimedica" and Last Name to "BV"

    Scenario: Verify broken image
        Given User navigates to "Elements"
        And User click on "Broken Links - Images"
        Then Verify first image is broken
