/// <reference types="cypress" />

describe('Login Menü Test', ()=>{

    it.skip('TC01', ()=>{
    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
 // 1.yol;
 //  cy.get('.login-form > h2').should('have.text', 'Login to your account')
    cy.contains('.login-form>h2', 'Login to your account') 
 //contains ile doğrulama yaptık, ilk olarak locatei koyuyoruz, sonra texti yazıyoruz.
 //Bu locatein texti bu mu? şeklinde doğrulama yaptık 
   cy.get('.signup-form > h2').should('be.visible')
   cy.contains('.signup-form > h2', 'New User Signup!')

    
    })

    it('TC02', ()=>{

        cy.visit('https://www.automationexercise.com/') 
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()  
        cy.get('[data-qa="signup-button"]').should('contain', 'Signup')
        cy.get('[data-qa="signup-name"]').type('Esra{enter}')
        cy.get('[data-qa="signup-email"]').type('denem@deneme.com{enter}')
                           //JQUERY kütüphanesinden FARKLI ASSERTİONLAR
        //1.yol:login olduktan sonra gelen sayfadaki "'Enter Account Information" yazısını
        //farklı bir function ie  doğruluyoruz.then() deyip içine doğrulayacağımız yere bir
        //bir isim verdik("enteraccount") diye

        cy.get(':nth-child(1) > b').then( enteraccount =>{
             expect(enteraccount.text()).to.equal('Enter Account Information')
        })

        //2.yol:
        cy.get(':nth-child(1) > b').invoke('text').then(enteraccount2 => {
            expect(enteraccount2).to.equal('Enter Account Information')
        })
        
    })
} )