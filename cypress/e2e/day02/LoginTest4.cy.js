/// <reference types="cypress" />

describe('Login Test', ()=>{

    it('Positive Test', ()=>{

        const name= "manager"  
        const email="manager@manager.com"

        cy.visit('https://www.automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="signup-name"]').type(name)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()
        cy.url().should('include','signup')
        

    })





    it.only('Negative Test', ()=>{
        const name= "manager"  
        const email="managermanager.com"

        cy.visit('https://www.automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="signup-name"]').type(name)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()

    })
} )