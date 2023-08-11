/// <reference types="cypress" />

describe('Suggested Elements2', ()=>{

    it('Test Case', ()=>{
       
          cy.visit('https://digiturksite.kartega.com/')
          cy.get('.nav-links-desktop > :nth-child(5) > a').click()
          cy.wait(3000)
          cy.xpath('//input[@id="searchChannel"]').type('modem',{force:true})
          cy.wait(3000)
       
        
        
    
    })

  
} )