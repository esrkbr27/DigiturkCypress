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
      cy.get(':nth-child(1) > .gb_v').click()

      //it.only sadece bu testi çalıştır anlamına gelir
    })
} )