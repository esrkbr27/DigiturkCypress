/// <reference types="cypress" />

describe('Hover Over', ()=>{

    it('Test Case', ()=>{
        cy.visit('https://www.amazon.com')

        cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover')
        cy.wait(3000)

     //Change country webelementi locate alıp tıklayabiliriz.   
        cy.get('#nav-flyout-icp > .nav-template > #icp-flyout-mkt-change > .nav-text > .icp-mkt-change-lnk').click()

     //locate almakta zorlanırsak contains metodu ile texti Change conutry içeren
     //elementi tıkla
     //   cy.contains('Change country').click()

    cy.wait(3000) 
    cy.get('#icp-dropdown').select('Turkey (Türkiye)', {force:true})


    })

    it.skip('Digiturk Hover over', ()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

        cy.visit('https://digiturksite.kartega.com/')
        cy.wait(3000)
        cy.get('.has-submenu > [href="/package"]').trigger('mouseover',{timeout:100000})
       
        
        

    })

   
} )