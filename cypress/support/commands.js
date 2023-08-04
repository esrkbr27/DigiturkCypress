// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Digiturk Login Fonksiyonu:
Cypress.Commands.add('login', (email, password) =>{
    cy.visit('https://digiturksite.kartega.com/')
    cy.get(':nth-child(8) > .btn').click()
    cy.get('#UserName').type(email)
    cy.get('#Password').type(password)
    cy.get('.login-right-button').click()
}) 


//Digiturk Search Fonksiyonu: 
Cypress.Commands.add('search', (word) =>{

    cy.visit('https://digiturksite.kartega.com/')
    cy.get('.nav-links-desktop-searchIcon').click()
    cy.get('#searchbarMain').type(word)
    cy.wait(3000)
    cy.get('.searchbox-menu-content-result').should('be.visible')


})   

//SaurceDemo Login Fonksiyonu
Cypress.Commands.add('saurce_login', (username, password) =>{

    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('#user-name').should('be.visible').type(username)
    cy.wait(2000)
    cy.get('#password').should('be.visible').type(password)
    cy.wait(2000)
    cy.get('#login-button').click()

})

