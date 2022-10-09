///<reference types="Cypress" />

describe (" Scroll",() =>{

it("Page up ", () => {
    cy.visit("https://demoqa.com")
    cy.get(".category-cards>div:nth-child(1)>div>div:nth-child(2)").click()
    cy.get(".accordion>div:nth-child(1)>div>ul>li:nth-child(1)>span").click()
    cy.get("#permanentAddress-wrapper").type("{pageup}")
    

})

//Esto hace que solo me corra este test
it.only("Page Down ", () => {
   // cy.visit("https://demoqa.com")
   // cy.get(".category-cards>div:nth-child(1)>div>div:nth-child(2)").click()
   // cy.get(".accordion>div:nth-child(1)>div>ul>li:nth-child(1)>span").click()
    cy.get("#permanentAddress-wrapper").type("{pagedown}")
    

})

})