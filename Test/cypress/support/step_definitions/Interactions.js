/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { interactionsPage } from "../pages/InteractionsPage";



When('Drag the Drag me box to Drop Here area', () => {
  interactionsPage.dragAndDrop();
});


Then('Verify the Drag me box is successfully dropped in Drop here area', () => {
  interactionsPage.verifyDragAndDrop();
});