/// <reference types="cypress" />

describe('Selectors Examples', ()=>{

    it('css Selectors', ()=>{
     cy.visit('https://www.amazon.com')

     //By Tag Name
     cy.get('input')

     //By id
     cy.get('#twotabsearchtextbox')
     //By class
     cy.get('.nav-search-field')

     //By Attribute name and value
     cy.get("[type='text']")

     //By 2 attribute 
     cy.get("[type='text'][id='twotabsearchtextbox']")

    })

    it.only('Xpath', ()=>{
     //By xpath   
        cy.visit('https://www.google.com')

        cy.xpath("//a[@class='gb_v']").should('include.text','Gmail').click({ multiple: true })
        //xpath ile locate almak için support file daki e2e.js classına require('@cypress/xpath') 
        //komutu eklenir. 
        //xpath i algılamazsa /// <reference types="cypress-xpath" /> komutu en başa eklenir.
       


    })
} )