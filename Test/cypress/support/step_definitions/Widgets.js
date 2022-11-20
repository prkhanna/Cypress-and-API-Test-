/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { widgetsPage } from "../pages/WidgetsPage";

When('User hover over the button {string}', (BtnText) => {
  widgetsPage.mouseHover(BtnText);
});


Then('Verify that tool tip {string} is appeared', (tooltipText) => {
  widgetsPage.verifyTooltipText(tooltipText);
});

When('User click on start the progress bar', () => {
  widgetsPage.clickStart();
});

Then('Verify the progress bar is {string} with green color', (coverage) => {
  widgetsPage.verifyProgressBar(coverage);
});