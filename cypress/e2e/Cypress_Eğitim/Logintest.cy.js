/// <reference types="cypress"/>

describe('Login Test', () => {

    beforeEach('Saucedemo visit', ()=>{
        cy.visit('https://www.saucedemo.com/')
    })


    it('SauceDemo Positive', () => {

        /*
        Login olurken kullanacağımız dataları öncelikle bir değişkene atarız.
        (const javascrptte değişken adıdır.) Daha sonra type metodunun içerisine
        değişken ismi tırnak içerisinde yazılmaz.

        Doğrulama yapmak için should fonksiyonu içerise aşağıdaki komutlar yazılır;

        -"be.visible"      :görünür olup olmadığının doğrulaması yapılı
        -"have.text"       :locatin textini buradan doğrularuz
        -"include,contain" :verdiğimiz kelimeyi içerip içermediği doğrulanır   



        */

       const username= "standard_user";
       const password="secret_sauce";


       cy.get('[data-test="username"]').type(username)
       cy.get('[data-test="password"]').type(password)
       cy.get('[data-test="login-button"]').click()
       cy.get('#react-burger-menu-btn').click()
       cy.get('#logout_sidebar_link').should('be.visible')
       cy.get('#logout_sidebar_link').should('have.text','Logout')

        
    });



    it('Saucedemo Negative Test', () => {

        const invaildusername="problem_user";
        const invalidpassword="deneme"

        cy.get('[data-test="username"]').type(invaildusername)
        cy.get('[data-test="password"]').type(invalidpassword)
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible')
        
     

        
    });






 })