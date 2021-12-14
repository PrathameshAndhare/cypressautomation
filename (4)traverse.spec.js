
describe('Traverse method in cypress ',()=>{
    

    it('To get children of DOM elements, use the .children() command.',()=>{
        cy.visit('https://css-tricks.com/')
        cy.get('nav[id="main-nav"]').children('ul').children('li').first().should('have.class','articles')
    })

    it('To get a DOM element at a specific index, use the .eq() command.',()=>{
        cy.visit('https://css-tricks.com/')
        cy.get('nav[id="main-nav"]').children('ul').children('li').eq(0).should('have.class','articles')
    })

    it('To get the first DOM element within elements, use the .first() command.',()=>{
        cy.visit('https://css-tricks.com/')
        cy.get('div[class="link-grid"]').children('div').first('div')
    })

    it('To get the last DOM element within elements, use the .last() command.',()=>{
        cy.visit('https://www.icc-cricket.com/rankings/mens/team-rankings/test')
        cy.get('.table-body').last().should('have.class','table-body')
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('div[class="navFooterLinkCol navAccessibility"]').eq(0).children('ul').children('li')
        .filter('.nav_first')
    })

    it('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        cy.visit('https://www.amazon.in/')
        cy.get('.nav-fill').children('div').find('div')
        .children('div')
        .should('have.id','nav-xshop')
    })

    it('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').next('li')
        .contains('Tea')
    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextAll()
        .should('have.length',4)
        
    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#sugar')
        .should('have.length',3)
    })
    it('To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#espresso').prev('li')
        .contains('Milk')
        
    })
    it('To get all the previous siblings DOM element within elements, use the .prevAll() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#espresso').prevAll('li')
        .should('have.length',3)
        
    })
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevUntil('#tea')
        .should('have.length',2)
        
    })

    it('To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list')
        .children('li').eq(2)
        .contains('Banana')
        .siblings().should('have.length',10)
        
    })

    it('To get the closest ancestor DOM element, use the .closest() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('th[scope="row"]').eq(1).closest('tr')
        .should('have.class','bg-info')
        
    })
    it('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.menu').children('li')
        .not('.sales')
        .should('have.length',2)
        
    })
    it('To get parent DOM element of elements, use the .parent() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').parent('ul')
        .should('have.class','traversal-food-list')
    })

    it('To get parents DOM element of elements, use the .parents() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').parents('div')
        .should('have.class','col-sm-12')
    })
    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').parentsUntil('div[class="col-sm-12"]')
        .should('have.length',1)
    })
})
