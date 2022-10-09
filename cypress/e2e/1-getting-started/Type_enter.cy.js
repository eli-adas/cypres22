
///<reference types="Cypress" />

describe (" Funciones para type",() =>{

    it("Type Enter ", () => {
        cy.visit("https://www.google.com/")
        cy.title().should('eq','Google')
        
        cy.get("#L2AGLb> div").click()
        cy.get("input.gLFyf").type("cypress.io{enter}")
        cy.get("#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > a > h3").click()

    })

})