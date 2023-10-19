/// <reference types='cypress' />

describe('token', () => {
   
   it('token', () => {

    cy.Gettoken("test.uskudar","123123").then((token)=>{

      cy.log(token)
      
      cy.request( {
        
         method:'POST',
         url:'bekservicealpha.kartega.com/api/addr/getcities',
         body:{

            
               "page" : 1,
               "pageSize" : 100
           
         },
         headers:{
             Authorization:'Bearer'+ token,
             accept:'application/json'
         }

     }).then( (response) =>{
       
         console.log(response)
         expect(response.status).to.eql(200)
         expect(response.body.data).to.length(81)
     
     } )
    })

        
    })

  
    

    
   });

   

