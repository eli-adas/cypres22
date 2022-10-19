///<reference types="Cypress" />

require('cypress-plugin-tab')

describe (" ",() =>{

    it(" ", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq','ToolsQA')
        cy.get("#searchBox").should("be.visible").type("Cierra")
        //clear the input
        cy.get("#searchBox").should("be.visible").clear()
        //add a new row in the table
        cy.get('#addNewRecordButton').should("be.visible").click()
        cy.get('#firstName').should("be.visible").type("Eli").tab().type("Pizarro").tab().type("eli@eli.com").tab().type("25").tab().type("30000").tab().type("Sistemas")
        cy.get('#submit').click()
        //Search the new row
        cy.get("#searchBox").should("be.visible").type("Eli")
        //cy.get("#searchBox").should("be.visible").clear()
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').should('have.text','Eli')

        //Edit a row
        //cy.get('.rt-table').scrollTo("right") //Make an scroll to th right of all the table
        cy.get('#edit-record-4 > svg > path').scrollIntoView().should("be.visible")  //Search the locator, and scroll it into view
        cy.get('#edit-record-4 > svg > path').should("be.visible").click()
        cy.get('#age').clear().type("40")
        cy.get('#submit').click()
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]').should("have.text","40")
       
        //Delete row
        cy.get('.rt-noData').should("not.exist")
        cy.get('#delete-record-4 > svg > path').click()
        cy.get('.rt-noData').should("exist").should("have.text", "No rows found")


    })

})