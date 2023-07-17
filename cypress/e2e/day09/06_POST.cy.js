/// <reference types="cypress" />

describe('POST 02', ()=>{

    it('Test', ()=>{
        const bodyrequest={"name":"Cypress","salary":"25","age":"34"}

        cy.request({
            url:"https://dummy.restapiexample.com/api/v1/create",
            method:'POST',
            body: bodyrequest
        }).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.status).to.eql('success')
            expect(response.body.message).to.eq('Successfully! Record has been added.')
        })


    })

    
} )