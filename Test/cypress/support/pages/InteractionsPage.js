/// <reference types="cypress" />
export class InteractionsPage {



    dragAndDrop() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
      cy.get('#draggable').drag('#droppable',{force:true});
    
    }

    verifyDragAndDrop() {
        cy.contains('Dropped!',{ timeout: 10000 }).should('be.visible')
    }

}
export const interactionsPage = new InteractionsPage();