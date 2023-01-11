///<reference types="Cypress" />
import 'cypress-file-upload'
import '@4tw/cypress-drag-drop'

describe ("Cypress eventos mouse",() =>{

    //Instalamos plugin: https://github.com/4teamwork/cypress-drag-drop
    it("Evento drag and drop", () => {
        let tiempo = 1000
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.title('eq','The Internet')
        //cy.get("#column-a").drag("#column-b")
        cy.get("#column-a").drag("#column-b",{force:true}) //si no funciona bien, podemos forzarlo

    })

})