///<reference types="cypress"/>

describe('Dropdown', () => { 

it('Select', () => {

    //1.yöntem text ile seçim yapma
    cy.visit('https://www.amazon.com.tr/')

    cy.get('#searchDropdownBox').select('Bilgisayarlar')
    cy.should('have.value','search-alias=computers')
    
    //index ile seçim yapma
    cy.get('#searchDropdownBox').select(3).should('have.value','search-alias=computers')
    
});




})