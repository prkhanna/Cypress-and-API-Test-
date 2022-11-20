Feature:  Perform actions on Widget

     Background: Open the application
          Given User opens the application

     Scenario: Verify the progress bar
          Given User navigates to "Widget"
          And User click on "Progress Bar"
          When User click on start the progress bar
          Then Verify the progress bar is "100%" with green color

     Scenario: Verify the tooltip
          Given User navigates to "Widgets"
          And User click on "Tool Tips"
          When User hover over the button "Hover me to see"
          Then Verify that tool tip "You hover over the button" is appeared