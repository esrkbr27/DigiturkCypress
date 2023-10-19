/// <reference types='cypress' />

describe('API GET REQUEST', () => { 


  it('GET', () => {

    //GET Request yaptık
    cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
    .its('status') //response un status kodunu aldık
    .should('equal',200)  //200 olup olmadığını doğruladık
    .then((response)=>{
     console.log(response)

    })
    
  });

  it('GET2', () => {
    
    cy.request('GET','https://jsonplaceholder.typicode.com/posts')
    .its('status')
    .should('equal',200)
   
  });
 })