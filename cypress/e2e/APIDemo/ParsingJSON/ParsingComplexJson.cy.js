/// <reference types='cypress' />

/*
Response bodyde yer alan datalar ulaşıp toplamak için bodyi
forEach() metodu ile loopa aldık, price ları yakalayıp
eklemiş olduk.

*/
describe('Parsing Json', () => { 

    it('Parsing Complex Json', () => {
        
        let totalprice=0;

        cy.request({
            
            method:'GET',
            url:'https://fakestoreapi.com/products/',
            qs:{limit:5}

        }).then((response)=>{

         expect(response.status).to.eq(200)
        
         response.body.forEach(element => {
            totalprice=totalprice+ element.price;
         });

         expect(totalprice).to.eq(899.23); //limit 5 
    });
        
    });
})


