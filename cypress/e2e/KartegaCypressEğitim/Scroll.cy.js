/// <reference types= "cypress" />
require('@cypress/xpath')


describe('Scroll', () => { 

it('ScrollIntoView', () => {

    /*Cypressin kendi aldığı locateler ile bazı durumlarda tıklama yapamayabilir.
    Bu gibi durumlarda xpath ile locate almak daha kolay ve elverişli olabilir.
    Cypress css ile locate almayı desteklerken xpath ile locate almak için plugin eklemek gerekir.
    Bunun için support/e2e.js classına "require('@cypress/xpath')" eklenir.
    xpath kullanacağımız classın başına da bu kod bloğu eklenir.Böylece xpath kullanabiliriz.

    */


    cy.visit('https://www.amazon.com')
    cy.xpath('//*[@alt="New arrivals in Toys"]').scrollIntoView().click()

 

    
});




})