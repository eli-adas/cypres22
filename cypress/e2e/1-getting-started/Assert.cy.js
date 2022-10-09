///<reference types="Cypress" />

require('cypress-plugin-tab')


describe (" Assert",() =>{

    it(" Type con Tab", () => {

    cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
    cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')

    //Un campo visible
    cy.get('#wsf-1-field-29').should("be.visible").type("Javi")

    cy.get('#wsf-1-field-30').should("be.visible").should("be.enabled").type("Pizarro")

    })

})