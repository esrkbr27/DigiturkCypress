/// <reference types="cypress" />

describe('Genel Tekrar', () => { 


    it('Url test', () => {
        cy.visit('https://www.google.com')
        cy.url().should('eq','https://www.google.com/')
    });

    it('Title test', () => {
        cy.visit('https://www.google.com')
        cy.title().should('contain','Google')
    });

    it('Oturum açma Click', () => {
        cy.visit('https://www.google.com')
        cy.get('.gb_ta').click()
        

    });


})