/// <reference types="cypress" />

describe('Custom Command1', ()=>{

    it('Positive Login', ()=>{
       
          cy.visit('https://digiturksite.kartega.com/')

          //Giriş Yap butonuna tıkla
          cy.get(':nth-child(8) > .btn').click()

          //username veri gir
          cy.get('#UserName').type('admin@admin.com')
          cy.wait(3000)

          //passworde veri gir
          cy.get('#Password').type('admin1234')

          //Giriş Yap butonuna tıkla
          cy.get('.login-right-button').click()

          //Hoşgeldin System admin yazısının görünür olduğunu doğrula
          cy.get(':nth-child(8) > .dropdownHeader > .dropdownHeader-button').should('be.visible')

    })

    it('Login Fonksiyon Cagirma', ()=>{
        /*
        Selenyumdaki reusable metod oluşturduğumuz gibi Cypresste de sık kullanıp çağırmak
        istediğimiz metodlar için commands.js dosyasında "login isminde fonksiyon oluşturduk.
        "Cypress.Commands.add('login', (email, password) =>{})
        fonksiyonda yer alan email ve passwordu kullanıcı bu classtan göndererek command dosyasındaki
        fonksiyonu çalıştırmış oluyoruz.
        */
         cy.login('admin@admin.com','admin1234')
         cy.get(':nth-child(8) > .dropdownHeader > .dropdownHeader-button').should('be.visible')

    })

    it.only('Negative Login', ()=>{
        cy.login('admin@com','admin124')
        cy.get('.alert').should('be.visible')


    })
} )