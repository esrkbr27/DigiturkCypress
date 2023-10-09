/// <reference types='cypress'/>

describe('Fixture using POST ', () => { 


    it('Approach3 -Fixture class using json object', () => {
       
        /*fixture altındaki  "torist" classından verileri al;
         then( (data) ) ismindeki değişkene koy, bu değişkeni const requestBody 
         değişkenine eşitle
         */
    
        cy.fixture('tourist').then( (data) =>{
            const requestBody=data;
      
        cy.request(
            
            {
                method:'POST',
                url:'http://restapi.adequateshop.com/api/Tourist',
                body:requestBody
    
            }
                      
        ).then( (response) =>{
    
            //Validation:1
                expect(response.status).to.eql(201)
                expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(response.body.tourist_email).to.eql(requestBody.tourist_email)
                expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
    
            //Validation:2
                expect(response.body).has.property('tourist_name',requestBody.tourist_name)
                expect(response.body).has.property('tourist_email',requestBody.tourist_email)
                expect(response.body).has.property('tourist_location',requestBody.tourist_location)  
                
            //Validation 3
                expect(response.body).to.have.property('tourist_name',requestBody.tourist_name)
                expect(response.body).to.have.property('tourist_email',requestBody.tourist_email)
                expect(response.body).to.have.property('tourist_location',requestBody.tourist_location)
        })
        
    })
    
    });


 })



