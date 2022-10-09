
describe ("Bienvenido al curso de cypress seccin 1",() =>{

    it("Mi primer test", () => {
        cy.log("Hola mundo")
    })

    it("Mi segundo test campo texto ", () => {
        cy.visit("https://demoqa.com")
        cy.get(".category-cards>div:nth-child(1)>div>div:nth-child(2)").click()
        cy.get(".accordion>div:nth-child(1)>div>ul>li:nth-child(1)>span").click()
        cy.get("#userName").type("Eli")
        cy.wait("4000")
    })

}) //Cierre describe
