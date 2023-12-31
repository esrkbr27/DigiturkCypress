// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Digiturk Login Fonksiyonu:
Cypress.Commands.add('login', (email, password) =>{
    cy.visit('https://digiturksite.kartega.com/')
    cy.get(':nth-child(8) > .btn').click()
    cy.get('#UserName').type(email)
    cy.get('#Password').type(password)
    cy.get('.login-right-button').click()
}) 


//Digiturk Search Fonksiyonu: 
Cypress.Commands.add('search', (word) =>{

    cy.visit('https://digiturksite.kartega.com/')
    cy.get('.nav-links-desktop-searchIcon').click()
    cy.get('#searchbarMain').type(word)
    cy.wait(3000)
    cy.get('.searchbox-menu-content-result').should('be.visible')


})   

//SaurceDemo Login Fonksiyonu
Cypress.Commands.add('saurce_login', (username, password) =>{

    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('#user-name').should('be.visible').type(username)
    cy.wait(2000)
    cy.get('#password').should('be.visible').type(password)
    cy.wait(2000)
    cy.get('#login-button').click()

})

//AutomationExercise signup metot

Cypress.Commands.add('automationexercisesignup', (name, emailaddress) =>{

    cy.visit('https://www.automationexercise.com/login')
    cy.get('[data-qa="signup-name"]').type(name)
    cy.get('[data-qa="signup-email"]').type(emailaddress)
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(1) > b').should('be.visible')
 

})

Cypress.Commands.add('beksignup',(username1,password1)=>{
   
    cy.visit('https://beksitealpha.kartega.com/anasayfa')
    cy.get('#username').type(username1)
    cy.get('#password').type(password1)
    cy.get('.ant-form-item-control-input-content > .ant-btn > span').click()
})



  

//API de token döndüren metod;    
Cypress.Commands.add('Gettoken',(username,password)=>{
 
    
   cy.request({

      method:'POST',
      url:'http://bekservicealpha.kartega.com/api/uye/Login',
      body:{
        "data": {
            "Username": username,
            "Password": password
        }
      },
      headers:{
        'Content-Types':'application/json'
      }
   }).then((response)=>{
    
     const  authtoken=response.body.token;
 
     return authtoken;
   })

})



