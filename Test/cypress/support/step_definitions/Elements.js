/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { elementsPage } from "../pages/ElementsPage";


Given('User opens the application', () => {
  cy.visit("/");

});

Given('User navigates to {string}', (ele) => {
  elementsPage.clickMainMenu(ele);
});


Given('User click on {string}', (option) => {
  elementsPage.clickSubMenus(option);
});


When('User click on {string} button', (feedName) => {
  elementsPage.clickButton(feedName);
});


When('Enter below input fields and hit submit', () => {
  elementsPage.fillRegistrationForm();
});

Then('Verify new row is created and appeared in the tables with all the provided information', (name) => {
  elementsPage.verifyAddedRow();
});

When('User click on edit icon in the {string}nd row of the table that contains firstname {string}', (rowNo, firstName) => {
  elementsPage.editRow(rowNo, firstName)
})


When('User Edit the First Name to {string} and Last Name to {string} and Hit save', (firstName, lastName) => {
  elementsPage.editDetails(firstName, lastName)
})

Then('Verify {string}nd row is successfully edited with First Name to {string} and Last Name to {string}', (row, firstName, lastName) => {
  elementsPage.verifyEditedRow(row, firstName, lastName);
});

Then('Verify first image is broken', () => {
  elementsPage.verifyBroken();
});



