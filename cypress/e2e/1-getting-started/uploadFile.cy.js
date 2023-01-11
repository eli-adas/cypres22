///<reference types="Cypress" />
import 'cypress-file-upload'

describe ("Upload file",() =>{

    //No abre ni el cuadro de diálogo, directamente la sube.
    //Antes de comenzar he instalado un plugin: https://github.com/abramenal/cypress-file-upload#contributors
    it("Load files", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should("eq","ToolsQA")
        cy.wait(1000)

        const ruta = 'image.jpg'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(1000)


    })

})