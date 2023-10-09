/// <reference types='cypress'/>

/*
    DELETE REUEST

*Oluşturuduğumuz bir datayi silmek için kullanılır.
Body kısmına bir sey yazmamız gerekmez.    

*/

describe('DELETE', () => { 

it('DELETE', () => {

    cy.request(
        {

            method:'DELETE',
            url:url,
            
        }
    ).its('status')
     .should('eql',200)
    
});



 })