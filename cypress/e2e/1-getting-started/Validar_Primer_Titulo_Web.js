///<reference types="Cypress" />

describe ("Seccion 1. Validando el título",() =>{

    it("Test validar titulo página", () => {
        cy.visit("https://demoqa.com")
        cy.title().should('eq','ToolsQA')
        cy.log("Se comprobó el titulo")

    })

})