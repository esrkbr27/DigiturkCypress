/// <reference types="cypress" />

describe('Dummy API Test', ()=>{

    it('Test01', ()=>{
        cy.request('https://dummy.restapiexample.com/api/v1/employees')
        .should((response) =>{
     
     
           assert.equal(response.status,200)
           assert.equal(response.body.data[9].id,10)
           assert.equal(response.body.data[9].employee_name,"Sonya Frost")
           
        })

    })


  





    
} )