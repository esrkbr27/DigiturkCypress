/// <reference types="cypress" />

describe('My first test', function(){
   
//function() metodu arrow ()=> ile aynı işlemi yapar
  
    it('URL Test', ()=>{

        cy.visit('https://www.google.com')
        cy.url().should('include', 'google')
        

    })

    it('Title test', ()=>{

        cy.visit('https://www.google.com')
        cy.title().should('include','Google')
        cy.title().should('eq','Google')
        
    })
} )