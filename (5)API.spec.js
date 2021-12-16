// const cypress = require("cypress")
// const { it } = require("mocha")



// const { expect } = require("chai")

describe('verify different types of API',()=>{

    it('verify the GET api request',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((response)=>{
            // cy.log(response.status)
            // cy.log(response.body.data[0]['email'])
            
            return response.body.data.find(function(el){
                // return el.first_name == "Michael"
                return el.id == 3
            })
        }).then((el)=>{
            // expect(el['first_name']).to.eq('Michael')
            cy.request({
                method:"GET",
                url:"https://reqres.in/api/users?page=2"
            }).then((res)=>{
                expect(el['id']).to.eq(res.body.data.id)
            })
        })
    })

})