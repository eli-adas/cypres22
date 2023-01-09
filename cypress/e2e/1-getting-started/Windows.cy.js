///<reference types="Cypress" />

describe ("Referencias a windows ",() =>{

    //Valida si el html tiene la propiedad charset a UTF-8
    it("Windows property charset ", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should("eq","The Number Game")

        cy.document().should("have.property", "charset").and('eq','UTF-8')

    })

    //Validación URL
    it.only("Validate URL", () => {
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should("eq","The Number Game")

        cy.url().should("include","/random-number.html")
        cy.url().should("eq","https://testsheepnz.github.io/random-number.html")

    })

})