/// <reference types="cypress" />

describe('Test Suite1', () =>{


it('Amazon visit', () =>{

  cy.visit('https://www.amazon.com.tr')

})



it('Url doğrulama', () => {
    
    //Amazon sitesine gidilir
    cy.visit('https://www.amazon.com.tr')


   //Urlin amazon içerdiği doğrulanır
    cy.url().should('include', 'amazon')
});


it('Title doğrulama', () => {

    //Amazon sitesine gidilir
    cy.visit('https://www.amazon.com.tr')

    //Title ın amazon içerdiği doğrulanır.
    cy.title().should('contain','Amazon')

    
});

})