class LoginPage {

getEmailBox(){

    return  cy.get('#UserName')
}

getPasswordBox(){
    return   cy.get('#Password')
}

getGirisYapButon(){
    return cy.get('.login-right-button').click()
}

getWelcomeTest(){
    return   cy.get(':nth-child(8) > .dropdownHeader > .dropdownHeader-button').should('include.text','Hoş Geldin') 
}

getHeaderMenu(){
    return cy.get('.nav-links-desktop')
}

}

export default LoginPage