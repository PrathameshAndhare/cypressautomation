describe('Validate the functionality of datepicker',()=>{

    it('Check functionality of datepicker',()=>{
        let date=new Date()
        date.setDate(date.getDate()+200)
        let fullYear =date.getFullYear()
        let month=date.getMonth()
        let dateD =date.getDate()
        month=date.toLocaleString('default',{month:'long'})
        

        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()
        function selectYearAndMonth(){
            cy.get('.datepicker-switch').eq(0).then((el)=>{
                if(!el.text().includes(fullYear)){
                    cy.get('.next').first().click()
                    selectYearAndMonth()
                }
            }).then(()=>{
                cy.get('.datepicker-switch').eq(0).then((el)=>{
                    if(!el.text().includes(month)){
                        cy.get('.next').first().click()
                        selectYearAndMonth()
                    }
                })
            })
        }
        selectYearAndMonth()
    })
})