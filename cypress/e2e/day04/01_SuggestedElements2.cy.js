/// <reference types="cypress" />

describe('Suggested Elements2', ()=>{

    it('Test Case', ()=>{
       
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
          cy.visit('https://digiturksite.kartega.com/')
          cy.get('.nav-links-desktop > :nth-child(5) > a').click()
          cy.wait(3000)
          cy.get('#searchChannel').type('modem')
          cy.wait(3000)
        
        
    
    })

  
} )