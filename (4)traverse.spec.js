describe('Traverse method in cypress ',()=>{
    before(()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')

    })

    it('To get children of DOM elements,use .children()',()=>{
        cy.get('ul[class="traversal-drinks-list"]')
        .children()
        .should('have.length',5)
    })
    it('To get element of specific index,use .eq()',()=>{
        cy.get('ul[class="traversal-drinks-list"]')
        .children()
        .eq(2)
        .should('have.text','Milk')
        
    })
    it('To get first element,use .first()',()=>{
        cy.get('ul[class="traversal-drinks-list"]')
        .children()
        .first()
        .should('have.text',"Coffee")
        
    })
    it('To get first element,use .first()',()=>{
        cy.get('ul[class="traversal-drinks-list"]')
        .children()
        .last()
        .should('have.text',"Sugar")
        
    })
    it.only('To get closest ancestor',()=>{
        cy.get('ul[class="traversal-drinks-list"]')
        .children()
        .last()
        .should('have.text',"Sugar")
        
    })

})
