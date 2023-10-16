/// <reference types='cypress' />

/*jsonpathfinder.com adresinde json formatında data girilip objeleri çözümlememize 
kolaylık sağlar.

*/

describe('API PARSİG', () => { 


    it('Parsing simple json response', () => {

        cy.request({
            
            method:'GET',
            url:'https://fakestoreapi.com/products/'

        }).then((response)=>{

           expect(response.status).to.eq(200)
           expect(response.body[0].id).to.eq(1)
           expect(response.body[0].title).to.eq('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
           expect(response.body[0].price).to.eq(109.95)
           expect(response.body[0].rating.rate).to.eq(3.9)


           expect(response.status).to.eq(200)
           expect(response.body[19].id).to.eq(20)
           expect(response.body[19].title).to.eq('DANVOUY Womens T Shirt Casual Cotton Short')
           expect(response.body[19].price).to.eq(12.99)
           expect(response.body[19].rating.rate).to.eq(3.6)
        })
        
    });
 })