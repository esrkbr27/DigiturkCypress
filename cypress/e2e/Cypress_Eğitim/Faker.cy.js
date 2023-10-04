/// <reference types="cypress" />

import { faker } from ('@faker-js/faker')

/*
Frameworkumuzde faker kütüphanesini kullanmak için;
https://www.npmjs.com/package/@fakerjs/faker adresine gidilip
install için terminale : npm install --save-dev @faker-js/faker komutu yazılır.
Hangi classta bu kütüphaneyi kullanacaksak classsın başına;
import { faker } from "@faker-js/faker"; yapıştırılır.

*/

describe('Faker example', () => { 


it('Automationexercise', () => {

    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    //name girilir

    let name=faker.person.fullName()
    cy.get('[data-qa="signup-name"]').type(name)

    //email girilir.
    let email=faker.internet.email()
    cy.get('[data-qa="signup-email"]').type(email)

    //Sign up butonu tıklanır.
    cy.get('[data-qa="signup-button"]').click() 
    
    //Mrs tıkla
    cy.get('#id_gender2').click()

    //Password

    let password=faker.number.int({max:10})
    cy.get('[data-qa="password"]').type(password)


});

 })