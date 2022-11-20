Feature:  Perform actions on Forms

     Background: Open the application
     Given User opens the application

   

     Scenario: Verify user can submit the form
      Given User navigates to "Forms"
      And User click on "Practice Form"
      When User enter all the input fields including picture and hit Submit
      Then Verify form is submitted successfully with provided data and close the window

   



