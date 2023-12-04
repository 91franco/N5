/// <reference types="Cypress"/>

const FormSignInScreen = require("../screenObjects/formSignIn.screen")

before(function () {
    //load the values from the file dataForm.json into the dataForm object
    cy.fixture('dataForm').then(function (dataForm) {
        //available for the all file
        this.dataForm = dataForm
        
    })
})

beforeEach(function () {
    //Enter to main page
    cy.visit('https://www.netflix.com/')
        
})

after(() => {
    cy.log('test cases finished')
})

// Suite test cases
describe('Test Cases SignIn', function () {
  
    it('SignIn - Submit (incorrect information)', function () {
        cy.get(FormSignInScreen.signInBtn).click()
        cy.get(FormSignInScreen.inputUser).type(this.dataForm.email_address)
        cy.get(FormSignInScreen.inputPassword).type(this.dataForm.password)
        cy.get(FormSignInScreen.loginBtn).click()
        cy.wait(4000)
        cy.get(FormSignInScreen.perfil).click()
        cy.wait(4000)
        cy.contains(FormSignInScreen.peliculas).click()      
        cy.contains(this.dataForm.title)       
           .should('contain.text', this.dataForm.title)
            .should('be.visible');
       
    })
   
})
