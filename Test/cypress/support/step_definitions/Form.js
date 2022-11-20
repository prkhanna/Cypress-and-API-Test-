/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { formPg } from "../pages/FormPage"




When('User enter all the input fields including picture and hit Submit', () => {
  formPg.enterDetails();
});

Then('Verify form is submitted successfully with provided data and close the window', () => {
  formPg.validateFormCreation();

});