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

    //A veces, en el dom, junto con el href encontramos un attributo target="_blank", esto sirve para abrir el link en una pestaña nueva.
    //Cypress falla en esto, y lo que podemos hacer es remover el atributo del dom antes de clicar para seguir en la misma página.
    //El codigo del ejemplo, no muestra esto, porque en el momento en el que lo he realizado, han cambiado la página y ya no está ese atributo, pero lo dejo como muestra.
    it("Open new tab", () => {
        let tiempo = 1000
        cy.visit('https://www.way2automation.com/')
        cy.title('eq','The Get Online Selenium Certification Course | Way2Automation')
        cy.contains("All Courses").trigger('mousemove') //pasa el raton por encima del desplegable y se muestra solo
        cy.contains("Selenium Python Video Tutorials").invoke("removeAttr", "target").click()

    })

    //No he conseguido moverlo ni usando la documentación de cypress
    it.only("Slider", () => {
        let tiempo = 1000
        cy.visit('https://demoqa.com/slider')
        //cy.get('.range-slider').invoke("attr", "style", "--value:60;").trigger('change')
       // cy.get('.range-slider').invoke("attr", "value", "60").trigger('change')
       // cy.get("div[class='range-slider__tooltip range-slider__tooltip--auto range-slider__tooltip--bottom']").invoke("attr", "style", "left: calc(45% + 1px);").trigger('change')
      // cy.get("input[type='range']").as('range').invoke('attr','value','60').trigger('change')
       //cy.get('.range-slider').invoke("attr", "style", "--value:60;").trigger('change')
       //cy.get("div[class='range-slider__tooltip range-slider__tooltip--auto range-slider__tooltip--bottom']").invoke("attr", "style", "left: calc(45% + 1px);").trigger('change',{force:true})

       cy.get('input[type="range"]')
       .then($el => $el[0].stepUp(40) )  // steps = 65 - 25
       .trigger('change')
     cy.get('#sliderValue').should('have.value', 65)     // passes

    })

})