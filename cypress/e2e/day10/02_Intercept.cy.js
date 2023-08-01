/// <reference types="cypress" />

describe('Intercept Test', ()=>{

    /*
   İntercept komutu ilgili endpoint arkasındaki api tarfiginde dinleme yapar.
   Sitede herhangi bir yere tıklandiğinda apilar harkete geçer.İntercept() 
   komutu ile bu harketliliği takip edip doğrulamalar yapabiliriz.
   Bunun için içine hangi 
    */

    it('Test', ()=>{
        cy.visit('https://example.cypress.io/commands/waiting')

        // diğer kullanım:   cy.intercept('GET','**/comments/*')
        cy.intercept('GET', 'https://jsonplaceholder.cypress.io/comments/1')
        .as('getComment')

        //as ile dönen responsu daha sonra kullanmak için
        // @ işareti ile kullanmak üzere getComment isminde bir değişkene atadık
        //aslında bu atama ile buraya bir flag koymuş olduk

        cy.get('.network-btn').click()

        cy.wait('@getComment').its('response').then((respose) =>{
            console.log(respose)

            assert.equal(respose.statusCode,200, "Status code success")

        })

    })

  
} )