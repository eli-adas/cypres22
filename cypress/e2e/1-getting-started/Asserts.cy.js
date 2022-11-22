///<reference types="Cypress" />

describe("Asserts", () => {

    //Desde el selector de una etiqueta padre, selecciona el elemento que contenga el texto "Women"
    it("Assert Contains", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title("eq", "My Store")
        cy.get("#block_top_menu").contains("Women").click()
    })

    //Desde el selector padre, encuentra otro selector hijo y coge el hijo 0
    it("Assert eq", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title("eq", "My Store")
        cy.get(".product-container").find(".product-image-container").eq(0).click()
    })

    /*
    Selecciono el vestido 0 y chequeo la etiqueta Condition.
    Esta etiqueta debe tener valor "New" de lo contrario fallará el test.
    A continuación chequeo el precio quitandole el signo $
    Debe ser menor a 20 o el test fallará.
    Si es menor de 20 clico en añadir al carro 
    Chequeo el texto en verde que me confirma que se ha añadido al carro
    */
    it("Reto", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title("eq", "My Store")
        cy.get(".product-container").find(".product-image-container").eq(2).click()
        cy.get('#product_condition > .editable').then((e) => {
            let estado = e.text()
            expect(estado).to.equal("New") //Verifica que es New
            //https://docs.cypress.io/guides/references/assertions#BDD-Assertions

            cy.log("El vestido es nuevo")

            //Option 1
            cy.get('#our_price_display').then((ele) => {
                const nazwy = ele.text().trim().replace("$", "")
                cy.log(nazwy)
            })
            //Option 2
            cy.get('#our_price_display').then((elem) => {
                let price2 = elem.text().slice(1, 6)
                cy.log(price2)
                //Option 1
                //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
                assert.isBelow(parseFloat(price2), 20.00, 'Error: Test expected that the dress will be less than 20')
                //Option 2
                cy.wrap(price2).then(parseFloat).should('be.lt', 20.00, "a")
                //https://stackoverflow.com/questions/62072822/cypress-assertion-equal-and-greater-than

                cy.log("El vestido esta dentro de nuestro presupuesto")
                cy.get('#add_to_cart > .exclusive').click()
                //Tiempo maximo por defecto 4s, esto incrementa maximo hasta 10s
                cy.get('.layer_cart_product > h2', { timeout: 10000 }).should("be.visible").contains("Product successfully added to your shopping cart")
            })


        })
    })

    it("Assert have vs contains", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title("eq", "ToolsQA")

        cy.get("#userName").should("be.visible").type("Rodrigo")
        cy.get("#userEmail").should("be.visible").type("Rodrigo@email.com")
        cy.get("#submit").should("be.visible").click()

        //have text tiene que tener todo el texto
        cy.get("#name").should("have.text", "Name:Rodrigo")
        //Contains contrendrá un texto
        cy.get("#name").should("contain.text", "Rodrigo")

    })

    it("Assert have.text + then", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title("eq", "ToolsQA")

        cy.get("#userName").should("be.visible").type("Rodrigoss")
        //contain.text espera un texto como de título, contain.value espera un valor dentro del input
        //Si el valor del campo es Rodrigo ya puede insertar el email.
        //¿Que pasa si en vez de Rodrigo escribe Rodrigoss.... con el contain.value va a entrar dentro de la promesa.
        //Por ello debería ser have.value para que sea exactamente el string que buscamos
        //cy.get("#userName").should("contain.value", "Rodrigo").then(() =>{
        cy.get("#userName").should("have.value", "Rodrigo").then(() => {
            cy.get("#userEmail").should("be.visible").type("Rodrigo@email.com")
            cy.get("#submit").should("be.visible").click()
        })

    })

    it("Assert validate a tag depending if have or not a class", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title("eq", "ToolsQA")

        cy.get("#userName").should("be.visible").should("have.class", "mr-sm-2").then(() => {
            cy.get("#userName").type("Eli")
        })

    })

    //También podemos anidar los assert con and, esto hace igual que en el ejemplo anterior que cumpla ambas condiciones
    it("Assert validate a tag depending if have or not a class", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title("eq", "ToolsQA")

        cy.get("#userName").should("be.visible").and("have.class", "mr-sm-2").then(() => {
            cy.get("#userName").type("Eli")
        })

    })

    

    it("Assert to validate that an element is in the dom but it's not visible", () => {
        cy.visit("https://demoqa.com/dynamic-properties")
        cy.title("eq", "ToolsQA")

        cy.get('#google_esf').should("not.be.visible").then(()=>{
            cy.log("is not visible")
        })
    })

    it.only("Assert number of locators find in dom", () => {
        cy.visit("https://demoqa.com/webtables")
        cy.title("eq", "ToolsQA")

        cy.get('.rt-tbody>div>div').should("have.length.greaterThan", 7).then(()=>{
            cy.log("Hay mas de 13 filas")
        })
    })

})