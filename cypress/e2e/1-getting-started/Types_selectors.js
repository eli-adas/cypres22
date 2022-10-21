///<reference types="Cypress" />

require('cypress-xpath');

describe ("Tipos de selector ",() =>{

    it("Por Id", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","ToolsQA")
        cy.get("#userName").should("be.visible").type("Caarlos")
    })

    it("Using attributes", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","ToolsQA")
        cy.get("[placeholder='Full Name]").should("be.visible").type("Caarlos")
    })

    it("Using xpath", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","ToolsQA")
        cy.xpath("//*[@id='userName']").should("be.visible").type("Caarlos")
    })

    it.only("Using contains", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq","ToolsQA")
        cy.get(".custom-control-label").contains("Female").click()
    })

})