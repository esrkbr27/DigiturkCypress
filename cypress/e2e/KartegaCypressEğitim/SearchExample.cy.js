/// <reference types= "cypress" />

describe('Test Case 01', () => { 

it('Amazon websitesine gidilir', () => {
  
    cy.visit("https://www.amazon.com.tr")

    //Çerezleri Kabul et
    cy.get('.sp-cc-buttons').click()


    //  Title doğrula
    cy.title().should('include', 'Amazon')

});

it('Bilgisayar aratılır', () => {


    cy.visit("https://www.amazon.com.tr")
    cy.get('#twotabsearchtextbox').type('Bilgisayar {enter}')
});

it('Laptop ara,doğrulamaları yap', () => {

    cy.visit("https://www.amazon.com.tr")
     //Çerezleri Kabul et
     cy.get('.sp-cc-buttons').click()

     //url i doğrula;
     cy.url().should('contains','amazon')

     //Title doğrula
    cy.title().should('include', 'Amazon')

     //Arama kutusuna bilgisayar yaz
     cy.get('#twotabsearchtextbox').type('Laptop {enter}')    

     //Arama sonucunu doğrula
     cy.get('.sg-col-14-of-20 > .sg-col-inner').should('include.text', 'Laptop')





});


 })


 describe('Automation Exercise search', () => { 

    it('Product search', function () {

        cy.visit('https://www.automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(2)').click()
        
    })

   
 })