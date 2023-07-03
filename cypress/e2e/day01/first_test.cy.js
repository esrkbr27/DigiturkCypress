/// <reference types="cypress" />

describe('My first test', ()=>{
    // describe: tanımlamak demektir.Test burada tanımlanır, ismi verilir.
    //describe ve it mocha kütüphanesinden gelir.

  
    it('URL Test', ()=>{

        cy.visit('https://www.google.com')
        //visit (url) gider

        cy.url().should('include', 'google')
        //should assert işlemi için kullanılır
        //include içeriyor mu (javadaki contains metodu )

    })

    it('Title test', ()=>{

        cy.visit('https://www.google.com')
        cy.title().should('include','Google')
        //title sayfanın title ını alır.
        cy.title().should('eq','Google')
        //eq eşit mi metodu(javadaki equalse)

    })
} )