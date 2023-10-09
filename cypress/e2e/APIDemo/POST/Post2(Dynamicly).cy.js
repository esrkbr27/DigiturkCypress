/// <reference types="cypress" />

describe('Dynamicly POST Request', ()=>{

    it('Approach2 -Dynamically generating json object', () => {

        const requestBody={ 
            
            tourist_name: Math.random().toString(5).substring(2),
            tourist_email:Math.random().toString(5).substring(2)+"gmail.com",
            tourist_location: "India"
        }   
        
        cy.request(
            
            {
                method:'POST',
                url:'http://restapi.adequateshop.com/api/Tourist',
                body:requestBody

            }
                      
        ).then( (response) =>{
                expect(response.status).to.eql(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eql(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })
        
        
    });


   
} )