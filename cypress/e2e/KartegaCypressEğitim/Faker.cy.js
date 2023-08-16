/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('Faker ', () => { 

it('Automatin Exercise', () => {

    //Siteye git
    cy.visit('https://www.automationexercise.com/')

    //Sign up butonuna tıkla
    cy.get("a[href='/login']").click()

    //Name kutucuğuna fake bir isim yaz
    let name=faker.person.firstName()
    cy.get("input[data-qa='signup-name']").type(name)
    cy.wait(2000)

    //passwordu değişkene atadık
    let password=faker.internet.email()
    cy.get("input[data-qa='signup-email']").type(password)
    cy.wait(2000)

    //Sign up butonuna tıkla
    cy.get("button[data-qa='signup-button']").click()

    //Enter Account yazısından doğrulama yap
    cy.get(':nth-child(1) > b').should('be.visible')
    
});



})