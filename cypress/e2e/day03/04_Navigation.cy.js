/// <reference types="cypress" />

describe('Navigation', ()=>{

    it('Back, Forward, Refresh', ()=>{

        cy.visit('https://www.automationexercise.com/')

        cy.wait(3000)

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        cy.wait(3000)

        cy.go('back')
       // cy.go(-1) :önceki sayfaya git
        cy.wait(3000)

        cy.go('forward')
      //cy.go(1) :sonraki sayfaya git 
        cy.wait(3000)

        cy.reload()

        cy.go('back').go(1).go(-1)

        cy.reload(true)
        // cy.reload(true) sayfayı cachden değil yeniden yükler


    })

    
} )