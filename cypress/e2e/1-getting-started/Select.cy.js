///<reference types="Cypress" />

describe ("Basic dropdown",() =>{

    it("Dropbox by visible text", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.title().should('eq','The Internet')
        cy.get('#dropdown').should("be.visible").select("Option 2")
    })

    it("Dropbox checking the correct value", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.title().should('eq','The Internet')
        cy.get('#dropdown').should("be.visible").select("Option 2").should("have.value",2)
    })

    it("Dropbox click by value", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.title().should('eq','The Internet')
        cy.get('#dropdown').select("2").should("have.value", "2")
    })

    //By index, el index comienza en 1 no en 0
    it("Dropbox click by index", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.title().should('eq','The Internet')
        cy.get('#dropdown').select(0).should("have.value", "2")
    })

    //Da error si pones should("have.value")
    it.only("Forze click in a hidden element", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.title().should('eq','The Internet')
        cy.get('#dropdown').should("be.visible").select("Option 2", {force:true}).invoke('val').should("eq","2")
    })

    //https://docs.cypress.io/api/commands/select#Syntax

})