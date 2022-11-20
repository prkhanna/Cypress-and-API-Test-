/// <reference types="cypress" />
export class WidgetsPage {

    clickStart(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('#startStopButton').click()
    }

    verifyProgressBar(coverage){
        cy.get('#resetButton',{ timeout: 12000 }).should('be.visible')
        cy.get("div[role='progressbar']",{ timeout: 12000 }).as('bar')
        cy.get('@bar').should('have.class', 'bg-success')
        cy.get('@bar').then((val)=>{
          cy.log(val.text())
         expect(val.text()).to.be.eq(coverage)
        })
    }

    mouseHover(btnText){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.contains('#toolTipButton',btnText).invoke('show')
        .trigger('mouseover').wait(1000)
    }

    verifyTooltipText(tooltipText){
        cy.get('.tooltip-inner').should('have.text',tooltipText)
    }

}
    export const widgetsPage = new WidgetsPage();