///<reference types="Cypress" />

describe ("CheckBox",() =>{

    it("Check and uncheck", () => {
        cy.visit("https://the-internet.herokuapp.com/checkboxes")
        cy.title().should('eq','The Internet')
        cy.wait(3000)
        cy.get('[type="checkbox"]').check().should("be.checked")
        cy.wait(2000)
        cy.get('[type="checkbox"]').uncheck().should("not.be.checked")

    })

    it("Check one", () => {
        cy.visit("https://the-internet.herokuapp.com/checkboxes")
        cy.title().should('eq','The Internet')
        cy.get('#checkboxes > :nth-child(1)').check().should("be.checked")

    })

    it.only("Check by click", () => {
        cy.visit("https://the-internet.herokuapp.com/checkboxes")
        cy.title().should('eq','The Internet')
        cy.get('#checkboxes > :nth-child(1)').click()

    })

})