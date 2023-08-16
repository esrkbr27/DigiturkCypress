/// <reference types= "cypress" />

describe('Checkbox', () => { 

    beforeEach('AutomationPractice Visit', ()=>{

        //Automationpractice sayfasına git
        cy.visit('http://www.automationpractice.pl/index.php')

    })

    it('AutomationPractice checkbox', () => {

      //Tshirts tıkla
        cy.get('.sf-menu > :nth-child(3) > a').click()
        cy.wait(3000)
      //S Checkbox ını işaretle, işaretli olduğunu doğrula   
        cy.get('#layered_id_attribute_group_1').check().should('be.checked')
        cy.wait(3000)

     //İşaretlemeyi kaldır, kalktığını doğrula   
        cy.get('#layered_id_attribute_group_1').uncheck().should('not.be.checked')


        
    });


    it('All checkbox', () => {

        cy.get('.sf-menu > :nth-child(3) > a').click()

        //Tüm checkboxları tikle,tiklendiğini doğrula
        cy.get('[type=checkbox]').check().should('be.checked')
        cy.wait(3000)

        //Tüm tiklemeleri kaldır.
        cy.get('[type=checkbox]').uncheck().should('not.be.checked')  

        //2.checkboxı işaretle(index olarak 1)
         cy.get('[type=checkbox]').eq(1).check()
         cy.wait(3000)  
        //Tiklemeyi kaldır, 1. checboxı işaretle
        cy.get('[type=checkbox]').eq(1).uncheck() 
        cy.wait(3000)
        cy.get('[type=checkbox]').first().click()


    });
 })