
///<reference types="Cypress" />

describe ("Segundo Reto",() =>{

    it("Probando aplicación", () => {
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should("eq","Computers database")

        //button search
        cy.get('#searchbox').type("ACE")
        cy.get('#searchsubmit').click()

        //button add
        cy.get('#add').should('be.visible').click()

        //Fill form
        cy.get('#name').should('be.visible').type('Cypress')
        cy.get('#introduced').should('be.visible').type('2010-12-12')
        cy.get('#discontinued').should('be.visible').type('2025-12-12')
        cy.get('#company').should('be.visible').select('Nokia').should('have.value','16')

        cy.get('.primary').should('be.visible').click()

        cy.get('.alert-message').should('be.visible').should('have.text','Done !  Computer Cypress has been created')

    })

})