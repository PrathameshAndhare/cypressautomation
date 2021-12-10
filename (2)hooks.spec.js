// beforeEach--- This block runs before every test case
// before ----- This block runs before everything
// afterEach--- This block runs after every test case
// after---- This block runs after everything 





describe('Validate  the functionality of hooks in cypress',()=>{

    before(()=>{
        cy.log('Before everything')
        // db connection
    })
    after(()=>{
        cy.log('After everything')
        // close db session
    })
    beforeEach(()=>{
        cy.log('This test case runs before every test case')
        // common url or functionalitybefore every testcase
    })

    afterEach(()=>{
        cy.log('After each test case')
        // clearing session storage,cookies and storage
    })

    it('First test case',()=>{
        cy.log('This is first test case')
    })

    it('Second test case',()=>{
        cy.log('This is second test case')
    })
})