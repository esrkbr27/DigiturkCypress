/// <reference types="cypress" />

describe('ViewPorts', ()=>{

    //viewport() metodu Siteyi istediğimiz responsive boyutlarda test etmemizi sağlar.

    it('İphone-8', ()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
          cy.visit('https://digiturksite.kartega.com/')
          cy.viewport('iphone-8')
          cy.screenshot()

    })

    it('Pixel Test', ()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
          cy.visit('https://digiturksite.kartega.com/')
          cy.viewport(768,575)

    })
} )