/// <reference types="cypress" />
export class FormPages {

    enterDetails() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.fixture('testdata.json').then((data) => {
            cy.get('#firstName').type(data.formFirstName)
            cy.get('#lastName').should('be.visible').type(data.formLastName)
            cy.get('#userEmail').should('be.visible').type(data.email)
            this.selectGender(data.gender)
            cy.get('#userNumber').should('be.visible').type(data.mobile)
            this.selectDate()
            cy.get('#subjectsContainer').should('be.visible').type(data.subjects)
            this.selectHobbie(data.hobbies)
            this.uploadImg()
            this. getStateCity(data.state,data.city)
            cy.get('#currentAddress').should('be.visible').type(data.address)
            cy.get('#submit').should('be.visible').click({force:true})
        })


    }

    selectDate(){
        cy.fixture('testdata.json').then((data) => {
        cy.get('#dateOfBirthInput').should('be.visible').click()
        cy.get('.react-datepicker__month-select').select(data.month)
        cy.get('.react-datepicker__year-select').select(data.year)
        cy.get(".react-datepicker__day").contains(data.day).click()
        })
    }

    getStateCity(state,city){
        cy.contains('Select State').should('be.visible').click()
        cy.log(state)
        cy.contains(state).click({force:true})
        cy.wait(1000)
        cy.contains('Select City').should('be.visible').click()
        cy.log(city)
        cy.get('#react-select-4-option-0').click({force:true})
    }

    selectGender(type) {
        if (type == "Male") {
            cy.get("label[for='gender-radio-1']").click();
        } else if (type == "Female") {
            cy.get("label[for='gender-radio-2']").click();
        } else if (type == "Other") {
            cy.get("label[for='gender-radio-3']").click();
        } else {
            cy.log("Incorrect gender type")
        }
    }

    selectHobbie(type) {
        if (type == "Sports") {
            cy.get("label[for='hobbies-checkbox-1']").click();
        } else if (type == "Reading") {
            cy.get("label[for='hobbies-checkbox-2']").click();
        } else if (type == "Music") {
            cy.get("label[for='hobbies-checkbox-3']").click();
        } else {
            cy.log("Incorrect hobby type")
        }
    }


    uploadImg(){
        const filepath = 'img.jpg'
        cy.get('#uploadPicture').attachFile(filepath)
    }

    validateFormCreation(){
        cy.fixture('testdata.json').then((data) => {
        cy.contains('tbody tr td','Student Email').siblings().then((text)=>{
            expect(text.text()).to.be.eql(data.email)
        })
        cy.contains('tbody tr td','Student Name').siblings().then((text)=>{
            expect(text.text()).to.include(data.formFirstName)
            expect(text.text()).to.include(data.formLastName)
        })
        
        cy.contains('tbody tr td','Gender').siblings().then((text)=>{
            expect(text.text()).to.include(data.gender)
        })
        cy.contains('tbody tr td','Mobile').siblings().then((text)=>{
            expect(text.text()).to.be.eql(data.mobile)
        })
        cy.contains('tbody tr td','State and City').siblings().then((text)=>{
            expect(text.text()).to.include(data.state)
            expect(text.text()).to.include(data.city)
        })
        cy.contains('tbody tr td','Address').siblings().then((text)=>{
            expect(text.text()).to.be.eql(data.address)
         })
         cy.contains('tbody tr td','Hobbies').siblings().then((text)=>{
            expect(text.text()).to.include(data.hobbies)
        })
        cy.contains('tbody tr td','Picture').siblings().then((text)=>{
            expect(text.text()).to.be.eql("img.jpg")
        })
         cy.contains('tbody tr td','Subjects').siblings().then((text)=>{
            expect(text.text()).to.be.eql(data.subjects)
        })
           cy.get('#closeLargeModal').click()
    }
)}
}
export const formPg = new FormPages();