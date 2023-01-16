///<reference types="Cypress" />

describe (" Date",() =>{

    it("Date", () => {
        cy.visit("https://demoqa.com/date-picker")
        cy.title("eq","ToolsQA")
        //cy.get('#datePickerMonthYearInput').should("be.visible").clear().type("09/09/2022").type('{enter}')

        //Opción b, usar una promesa
        cy.get('#datePickerMonthYearInput').should("be.visible").clear().type("09/09/2022").then(()=>{
            cy.get('#datePickerMonthYearInput').should("be.visible").type('{enter}')
        })
    })
})