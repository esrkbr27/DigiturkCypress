/// <reference types= "cypress" />

describe('Checkbox', () => { 

    it('Amazon checkbox', () => {
        //Automationpractice sayfasına git
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.sf-menu > :nth-child(3) > a').click()
        cy.get('#layered_id_attribute_group_1').check().should('be.checked')
        cy.get('#layered_id_attribute_group_1').uncheck().should('not.be.checked')


        
    });
 })