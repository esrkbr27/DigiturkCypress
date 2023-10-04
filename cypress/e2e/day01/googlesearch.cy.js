/// <reference types="cypress" />

describe('Google search', ()=>{

    beforeEach('Her testten önce calisir',()=>{
        cy.visit('https://www.google.com')
        })

    it('Search', ()=>{
        cy.get('.SDkEP', {timeout: 3000}).type('telefon{enter}')

    })

    it.only('Click', ()=>{
      cy.visit('https://www.google.com')
      cy.get('#APjFqb').type('cypress{enter}')

      //it.only sadece bu testi çalıştır anlamına gelir
    })


    
} )