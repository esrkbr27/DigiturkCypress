/// <reference types= "cypress" />

describe('Hoverover', () => { 

   it('Amazon hoverover', () => {
    //sayfaya git
    cy.visit('https://www.amazon.com.tr/ref=nav_logo')

    //çerezleri kullanmadan devam et
    cy.get('#sp-cc-rejectall-link').click()

    //Merhaba, giriş yap ksımının üzerinde bekle
    cy.get('#nav-link-accountList-nav-line-1').trigger('mouseover')
    
   });

 })