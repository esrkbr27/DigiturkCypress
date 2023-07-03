/// <reference types="cypress" />

describe('Super Domain', ()=>{

    it.skip('TC01', ()=>{
        cy.visit('https://www.amazon.com')
        cy.visit('https://www.google.com')
     
        //Cypresste aynı test bloğu içerisinde farklı iki adrese gidilemez
        //Gidilmek istendiğinde SuperDomain hatası veriyor
    

    })

    it('TC02', ()=>{
        cy.visit('https://www.amazon.com')
        cy.visit('https://www.amazon.com.tr/deals?ref_=nav_cs_gb')
        
    })

  
} )