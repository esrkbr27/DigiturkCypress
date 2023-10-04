/// <reference types ="cypress" />

describe("Test Suite 1", () =>{


it("Login Custom Command", () =>{
    /*
    fixture dosyasında saurce dosyasındaki dataları as ile
    user adında bir variablea atadık.daha sonra get()içerisinde @user
    */


    cy.fixture('saurce').as("user")
    cy.get('@user').then((user) =>{
    cy.saurce_login(user.username, user.password)
     
    })
})














})