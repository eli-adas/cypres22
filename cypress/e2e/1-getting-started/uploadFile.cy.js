///<reference types="Cypress" />
import 'cypress-file-upload'

describe ("Upload file",() =>{

    it("Load files", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq","ToolsQA")
        cy.wait(1000)

        const ruta = 'image.jpg'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(1000)


    })

})