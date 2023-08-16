/// <reference types= "cypress" />

describe('İlk deneme', ()=>{

    it('Amazon ziyaret', ()=>{

        cy.visit('https://www.amazon.com')
        cy.title().should('include','Amazon')
        cy.get('#twotabsearchtextbox',{timeout:3000}).type('bilgisayar{enter}')
        cy.url().should('contain','bilgisayar')
    })


})