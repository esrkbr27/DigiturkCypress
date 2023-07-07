class LoginPage {

getEmailBox(){

    return  cy.get('#UserName')
}

getPasswordBox(){
    return   cy.get('#Password')
}

}

export default LoginPage