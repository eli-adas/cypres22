///<reference types="Cypress" />

require('cypress-plugin-tab')


describe (" Ejemplo función Tab",() =>{

    it(" Type con Tab", () => {

    cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
    cy.wait(1000)
    cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')

    cy.get('#wsf-1-field-29').type("Eli").tab().type("Pizarro").tab().type("mi email")
    })

})