///<reference types="Cypress" />

describe ("Basic dropdown",() =>{

    it("Dropbox by visible text", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.title().should('eq','The Internet')
        cy.get('#dropdown').should("be.visible").select("Option 2")
    })

    it("Dropbox checking the correct value", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.title().should('eq','The Internet')
        cy.get('#dropdown').should("be.visible").select("Option 2").should("have.value",2)
    })

    it("Dropbox click by value", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.title().should('eq','The Internet')
        cy.get('#dropdown').select("2").should("have.value", "2")
    })

    //By index, el index comienza en 1 no en 0
    it("Dropbox click by index", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.title().should('eq','The Internet')
        cy.get('#dropdown').select(0).should("have.value", "2")
    })

    //Da error si pones should("have.value")
    it("Forze click in a hidden element", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.title().should('eq','The Internet')
        cy.get('#dropdown').should("be.visible").select("Option 2", {force:true}).invoke('val').should("eq","2")
    })


    it("Select two options", () => {
        cy.visit("https://demoqa.com/select-menu")
        cy.title().should('eq','ToolsQA')
        cy.get("#cars").should("be.visible").select(["Volvo", "Opel"])

    })

    //Select Volvo, Opel, si lo seleccionas entonces... Abro una nueva función (es como un if).
    //Si lo selecciona quiero que clique en otra opción
    //Al usar un select y despues el otro, desmarca las opciones del primero y marca la de saab
    it.only("Select two option whith a promise", () => {
        cy.visit("https://demoqa.com/select-menu")
        cy.title().should('eq','ToolsQA')
        cy.get("#cars").should("be.visible").select(["Volvo", "Opel"]).then(() =>{
            cy.wait(3000)
            cy.get("#cars").should("be.visible").select("Saab")
        })

    })

    

})