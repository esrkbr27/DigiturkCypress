/// <reference types="cypress" />

describe('DELETE', ()=>{

    it('Test', ()=>{
        const bodyrequest={"name":"Cypress","salary":"25","age":"34"}

        cy.request({
            url:"https://dummy.restapiexample.com/api/v1/delete/2",
            method:'DELETE'
        }).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.status).to.eql('success')
            expect(response.body.message).to.eq('Successfully! Record has been deleted')
        })


    })

    
} )