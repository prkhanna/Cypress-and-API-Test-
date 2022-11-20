Feature:  Perform actions on Interactions

    Background: Open the application
        Given User opens the application

    Scenario: Verify user can drag and drop
        Given User navigates to "Interactions"
        And User click on "Droppable"
        When Drag the Drag me box to Drop Here area
        Then Verify the Drag me box is successfully dropped in Drop here area