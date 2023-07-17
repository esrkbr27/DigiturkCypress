/// <reference types="cypress" />
import HomePage from "./POM/HomePage.cy"
import LoginPage from "./POM/LoginPage.cy"


describe('Login', ()=>{

    before(function(){
        cy.fixture('digiturk').then(function(data){
            this.data = data
        })
    })

    it('Login Using Fixture ', function(){

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

          const homePage = new HomePage()
          const loginPage= new LoginPage()

         // cy.visit('https://digiturksite.kartega.com/')
            cy.visit(this.data.url)

          //Giriş Yap butonuna tıkla
        //  cy.get(':nth-child(8) > .btn').click()
           homePage.getSigninButton()

          //username veri gir
          //  cy.get('#UserName').type('admin@admin.com')
        //  cy.get('#UserName').type(this.data.email)
            loginPage.getEmailBox().type(this.data.email)

          cy.wait(1000)

          //passworde veri gir
        //  cy.get('#Password').type('admin1234')
        // cy.get('#Password').type(this.data.password)
            loginPage.getPasswordBox().type(this.data.password)

          //Giriş Yap butonuna tıkla
         // cy.get('.login-right-button').click()
           loginPage.getGirisYapButon()

          //Hoşgeldin System admin yazısının görünür olduğunu doğrula
        //  cy.get(':nth-child(8) > .dropdownHeader > .dropdownHeader-button').should('be.visible')
           loginPage.getWelcomeTest() 

           //and metodu ile peş peşe doğrulama yapabiliriz.Header menüdeki başlıkların
          //login page de olup olmadıklarını doğruladık.
           loginPage.getHeaderMenu().should('contain.text', 'Hoş Geldin')
           .and('contain.text','Keşfet').and('contain.text','Yayın Akışı')


    })
} )