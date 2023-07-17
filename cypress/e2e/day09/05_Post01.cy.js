/// <reference types="cypress" />

describe('', ()=>{
    const requestURL='https://jsonplaceholder.cypress.io/comments'


    it('Test', ()=>{
        cy.request('POST',requestURL, {
            userId:501,
            title: "Cypress Post İşlemi",
            body:"Javascript ile Cypress post"
        }).then((response) =>{
            expect(response.status).to.eql(201)
            expect(response.body.userId).to.eql(501)
            expect(response.body.title).to.eql('Cypress Post İşlemi')
            expect(response.body.body).to.eq('Javascript ile Cypress post')
        })

    })

    it('', ()=>{

    })
} )