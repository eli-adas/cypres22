import data from '../../../fixtures/example.json'
import dataArray from '../../../fixtures/exampleArray.json'


class FirstPage{

    elements ={
        fullNameInput : () => cy.get('#userName'),
        emailInput : () => cy.get('#userEmail')
    }

    fistStepCheckTitlePage(){
        let tiempo = 1000
        cy.visit('https://demoqa.com/text-box')
        cy.title('eq','ToolsQA')
    }

    setFullName(){
        //this.elements.fullNameInput().type("Elia")
       // this.elements.fullNameInput().type(data.name)
        this.elements.fullNameInput().type(dataArray[1].name)
    }

    setEmail(){
       // this.elements.emailInput().type("elia@elia.com")
        this.elements.emailInput().type(data.email)
    }

}//final

export default FirstPage //Si no le pongo esta instrucción no me lo exporta
//module.exports = new FirstPage();