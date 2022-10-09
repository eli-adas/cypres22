///<reference types="Cypress" />

describe (" Tipos de Click ",() =>{

    it("Click 1 ", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").should("be.enabled").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").should("be.enabled").type("admin123")
        cy.get('.oxd-button').click()

        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible")

    })

    //Click forzado para cuando hay problemas para clicar. Lo obliga a interactuar sobre el elemento.
    it.only("Force true ", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").should("be.enabled").type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should("be.visible").should("be.enabled").type("admin123")
        cy.get('.oxd-button').click()

        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should("be.visible")

        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').should("be.visible").click({force: true})

    })

})