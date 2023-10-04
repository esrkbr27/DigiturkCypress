/// <reference types="cypress"/>

describe('Viewport', () => { 



    it('Viewport test', () => {

        //cypress.config.js classına eğer baseUrl: tanımladıktan sonra;
        //visit komutunun içerisine  "/" koymanız yeterlidir.
        cy.visit('/')
        cy.viewport(375,768)
        cy.screenshot()
        
    });

    it('Viewport', () => {
        
        cy.visit('/')
        cy.viewport('macbook-13')
    });
 })