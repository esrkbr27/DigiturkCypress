/// <reference types="cypress" />

describe('Digiturk Login', ()=>{

    it('Giris yapma', ()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
       cy.visit('/')

       //1.Yol:cy.get(':nth-child(8) > .btn').click()
     
      //2.yol;
      //contains metodu DOM da locatei Giriş Yap olan texti bul ve anlamına gelir
      cy.contains('Giriş Yap').click()
      cy.url().should('include', 'login')
      cy.get('#UserName', {timeout: 4000}).type('admin@admin.com')
      cy.get('#Password', {timeout: 4000 }).type('admin1234')
      // 2.yol:cy.get('#Password', {timeout: 4000 }).type
      ('admin1234 {enter}')
      cy.get('.login-right-button').click()
    })

    it('', ()=>{
       
    })
} )
