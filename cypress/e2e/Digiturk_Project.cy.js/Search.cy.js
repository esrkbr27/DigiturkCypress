/// <reference types="cypress" />

describe('Custom Command2', ()=>{

    it('Digiturk search Channel', ()=>{

      //commands.js dosyasından search metodunu çağırdık.
      cy.search('A SPOR')

    })

    
    it.only('Search Package', ()=>{
       cy.search('Taraftar Paketi')
    })

  
} )