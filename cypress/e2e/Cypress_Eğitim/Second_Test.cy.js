/// <reference types="cypress" />

describe('Search', () => {


it('Search Practice', () => {

    //Automation exercise sitesine gidilir
    cy.visit('https://www.automationexercise.com/')

    //Url doğrulanır.
    cy.url().should('include', 'automationexercise')

    //Products tıklanır
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
    
    
});

 })