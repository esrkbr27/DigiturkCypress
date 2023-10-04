/// <reference types="cypress"/>

describe('Custom Command', () => { 

/*
-Custom commandler cypresste sık kullanılan metotları yazıp,
çağırmak için kullanılır.

-support/command.js dosyası içerisinde bu metotlar oluşturulur.

-Cypress.Commands.add('...')

*/

it('Automation signup', () => {

   cy.automationexercisesignup('Esra','example2@example.com')
    
});

it.only('Fixture', () => {

    cy.fixture('automation.json').as('user')
    cy.get('@user').then((user)=>{
    cy.automationexercisesignup(user.name,user.emailaddress)
    
    })
    
});











    
 })