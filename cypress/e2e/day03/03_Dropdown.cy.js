/// <reference types="cypress" />

describe('Dropdown', ()=>{

    it('Test Case', ()=>{
      
        cy.visit('https://the-internet.herokuapp.com/dropdown')

        //select komutunun içine seçenekte gördüğümüz yazıyı yazdık
        cy.get('#dropdown').select('Option 1').should('have.value',1)
        //have.value bu elementin value değeri 1 mi doğruladık.

        cy.get('#dropdown').select('Option 2').should('have.value',2) 
    })

   
} )