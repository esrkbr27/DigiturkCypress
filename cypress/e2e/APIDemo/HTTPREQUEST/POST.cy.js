/// <reference types='cypress' />

/*
       POST REQUEST
*Server da yeni bir kayıt oluşturmak için POST metodu kullanılır.
Örneğin bir otel uygulamasında tüm rezervasyonları tuttuğumuz bir serverda;
yeni bir rezarvasyon oluşturmak için POST metodu kullanılır.
Body ile gerekli bilgiler gönderilir.Kaydın oluşup oluşmadığı doğrulanır.       

*/
describe('POST Request', () => { 

    const url='https://jsonplaceholder.typicode.com/posts'

    it('POST', () => {

        cy.request({
              
            method:'POST',

            url: url,

            body:'bar'

        }).its('status').should('eql',201)
        .then((response)=>console.log(response));
        
    });

  
})