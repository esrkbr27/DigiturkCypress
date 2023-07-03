/// <reference types="cypress" />

describe('Suggested Elements', ()=>{

    it.skip('Test Case 01', ()=>{

        cy.visit('https://www.automationexercise.com/')

    })

    it('Test Case 02', ()=>{

        cy.visit('https://www.google.com')
        cy.get('#APjFqb').type('Yahoo')
        cy.get('#gLuoSb > .wM6W7d > span').click()

    })
} )