/// <reference types="cypress"/>



describe('Hoverover', () => { 


    it('Hoverover', () => {
        cy.visit('https://www.amazon.com.tr/')
        cy.get('#nav-link-accountList').trigger('mouseover')

        cy.get('[href="/gp/bestsellers?ref_=nav_cs_bestsellers"]').click()

        cy.go('back')

        cy.go('forward')

        cy.go('reload')
        
    });
})