/// <reference types="cypress"/>

describe('Checkbox', () => { 

    beforeEach('Automationpractice', ()=>{

        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.tree > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]')
        .scrollIntoView().click()

    })

it('Single checkbox', ()=>{

    //scrollIntoView() metodu sayfada istediğimiz alana scroll yapmamızı sağlar.

    //Tikleme:
    
    //Tops tıkla
    cy.get('#layered_category_4').check().should('be.checked')


})

it('Uncheck', () => {
    
      //Tops tıkla
      cy.get('#layered_category_4').check().should('be.checked')
      cy.wait(3000)

      //Tiklemeyi kaldırma
      cy.get('#layered_category_4').uncheck().should('not.be.checked')

});

it.only('All checkboxes', () => {

    //Hepsini tikle
    cy.get("[type='checkbox']").check().should('be.checked')

    //Tiklemeleri kaldır
    cy.get("[type='checkbox']").uncheck().should('not.be.checked')


    //1.tikle
    cy.get("[type='checkbox']").first().check().should('be.checked')

    cy.get("[type='checkbox']").first().uncheck()



    //4.tikle
    cy.get("[type='checkbox']").eq(3).check().should('be.checked')
   

});






 })