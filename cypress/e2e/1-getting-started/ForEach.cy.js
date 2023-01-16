///<reference types="Cypress" />

describe ("For each",() =>{

    it("For each 1", () => {
        cy.visit("https://automationexercise.com/")
        cy.title("eq","Automation Exercise")


       

        cy.get("div[class='productinfo text-center']").then(($els) => {
        let texts = Array.from($els, el => el.innerText);
        cy.log(texts)
        })

        cy.log("Este es el elemento 3" + texts.get(3))

     

        cy.get("div[class='productinfo text-center']").each(($el,index,$list) => {
            cy.log(index) //indice de la lista
           // cy.log($el) //selector general
            //cy.log($list) //index + el

            cy.log($el.text())
            let nombreRopa = $el.text()
            if(nombreRopa.includes("Winter Top")){
                cy.wrap($el).click() //wrap sirve para coger el eleemnto
                $el.appendTo(">a")
                cy.log($el)
            
                cy.wait(5000)
            }
        })

    })

})