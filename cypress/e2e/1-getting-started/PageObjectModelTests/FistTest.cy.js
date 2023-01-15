
import FirstPage from "../PageObjectModelPages/FirstPage.cy.js"
///<reference types="Cypress" />
require('cypress-xpath')

//Using Page Object Model
//https://medium.com/@knoldus/how-to-implement-the-page-object-model-using-cypress-a8c5e75ff175
//DDT
//https://www.browserstack.com/guide/data-driven-testing-using-cypress
describe ("My first test using POM",() =>{

    const fistPage = new FirstPage() //Crea una instancia de FirstPage
   

    Cypress.on('uncaught:exception', (err,runnable) =>{
        return false
    })

    it("Page Object Model First Test ", () => {
        fistPage.fistStepCheckTitlePage();
        cy.log("hola")
        fistPage.setFullName()
        fistPage.setEmail()

    })

})