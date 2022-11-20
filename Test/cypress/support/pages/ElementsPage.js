/// <reference types="cypress" />

export class ElementsPage {


    clickMainMenu(ele) {
        cy.contains("div[class= 'card mt-4 top-card']", ele).should('be.visible').click();
    }

    clickSubMenus(option) {
        cy.contains("span[class='text']", option).should('be.visible').click();
    }


    clickButton(name) {
        cy.contains("button", name).should('be.visible').click();
    }


    fillRegistrationForm() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.fixture('testdata.json').then((data) => {
            cy.get('#firstName').type(data.firstName)
            cy.get('#lastName').should('be.visible').type(data.lastName)
            cy.get('#userEmail').should('be.visible').type(data.email)
            cy.get('#age').should('be.visible').type(data.age)
            cy.get('#salary').should('be.visible').type(data.salary)
            cy.get('#department').should('be.visible').type(data.department)
            cy.get('#submit').should('be.visible').click()
        })

    }


    verifyAddedRow() {
        cy.get('.rt-tr-group').as('rows')
        cy.get('@rows').each(($el, index, $length) => {
            cy.wrap($el).then((name) => {
                if (name.text().includes('QA')) {
                    expect(name.text()).to.include('AldenCantrell30test@test.com12345QA')
                }
            })
        })

    }

    editRow(rowNo,firstName){
        cy.get('.rt-tr-group').as('rows')
        cy.get('@rows').eq(rowNo-1).then((row)=>{
            cy.log(row.text())
           if(row.text().includes(firstName)){
            const locator = '#edit-record-'+rowNo;
        
           cy.get(locator).click()
           }
        })
    }

    editDetails(firstName,lastName){
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('#userForm #firstName').clear().type(firstName)
        cy.get('#lastName').should('be.visible').clear().type(lastName)
        cy.get('#submit').should('be.visible').click()
    }


    verifyEditedRow(rowNo,firstName,lastName){
        cy.get('.rt-tr-group').as('rows')
        cy.get('@rows').eq(rowNo-1).then((row)=>{
            cy.log(row.text())
            expect(row.text()).to.include(firstName)
            expect(row.text()).to.include(lastName)
        })
    }

    verifyBroken(){
        cy.get("img[src='/images/Toolsqa_1.jpg']").each(($el) => {
        cy.wrap($el).scrollIntoView().should('be.visible');
          
            expect($el[0].naturalWidth).to.be.eq(0);
            expect($el[0].naturalHeight).to.be.eq(0);
          });
    }

   
}

export const elementsPage = new ElementsPage();