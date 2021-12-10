describe('Validate the login functionality of OrangeHRM',()=>{

    it('Check with valid credentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('input[id="btnLogin"]').click()
        cy.get('img[alt="OrangeHRM"]').should('be.visible')
    })

    it('Check with invalid credentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('Admn')
        cy.get('input[id="txtPassword"]').type('admi123')
        cy.get('input[id="btnLogin"]').click()
        cy.get('span[id="spanMessage"]').should('be.visible')
    })
})


 // css  selector ---> tagName[attribute="value"]
        // <h1 id="one">Hello</h1>
        // cy.visit() --- to visit the url

        // Element select ----->

        // cy.get(`${css selector}`)
        // cy.contains(`Hello`)