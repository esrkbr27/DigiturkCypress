
/// <reference types="cypress" />

context('My second test', ()=>{
//describe yerine context de kullanılabilir.

beforeEach('Her testten önce calisir',()=>{
//testng deki before metodu görevini görür.

cy.visit('/')

})
    it('Url test', ()=>{
        cy.url().should('include','digiturk')
    //    cy.url().should('eq','https://digiturksite.kartega.com')

    })

    it.skip('Title test', ()=>{
        cy.title().should('include','Digiturk')
        cy.title().should('equal','| Digiturk')
        //skip testi yapmadan geçer.

    })

    it('Search test', ()=>{
        cy.get('.nav-links-desktop-searchIcon').click()
        cy.get('#searchbarMain.nosubmit',{timeout :5000}).type('Aile{enter}')
        //get(): ile locate alıyoruz
        //type(): ile metin gönderiyoruz
         
    })

    it('Search test', ()=>{
       
      
    })
} )