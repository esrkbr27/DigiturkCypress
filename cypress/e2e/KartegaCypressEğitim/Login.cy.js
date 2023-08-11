describe('Login Test', () => { 

    beforeEach('SauceDemo Visit', ()=>{
        cy.visit('https://www.saucedemo.com/v1/')
    })

    it.only('Pozitif Senaryo', () => {

        cy.get('[data-test="username"]',{timeout:3000}).type('standard_user')
        cy.get('[data-test="password"]',{timeout:3000}).type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include','inventory')
        cy.get('.app_logo').should('be.visible')

        
    });


    it('Negatif Senaryo 1', () => {
        
    });




 })