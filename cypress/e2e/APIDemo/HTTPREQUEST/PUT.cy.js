/// <reference types='cypress' />


/*
          PUT VE PATCH REQUEST

*Serverda oluşturduğumuz bir kayıt üzerinde tamamen bir değişiklik yapacaksak "PUT" ,
kısmen bir değişiklik yapacaksak "PATCH"  request gönderilir.Örneğin;
Bir ürün bilgisi listesini tuttuğumuz bir serverda POST ile aşağıdaki gibi          
id:100 olan bir ürün oluşturalım;

POST
{ 
  "id": 100, 
  "createdAt": "2021-06-12T14:22:49", 
  "name": "Sample Keyboard", 
  "price": 3.5 
}

*Daha sonra oluşturduğumuz bu ürünün diğer bilgileri sabit kalmak koşulu ile
sadece price:5 olacak şekilde güncelleme yapmak istiyorsam aşağıdaki gibi id:100 oaln ürüne
PATCH Reuest göndermem gerekir;Body e sadece değişiklik yapmak istediğim alan yazılır.
Bu haliyle sadece price değişir, diğer bilgileri değişmez.

> PATCH /product/100 
{ 
  "price": 5.0 
} 

> GET /product/100 
{ 
  "id": 100, 
  "createdAt": "2021-06-12T14:22:49", 
  "name": "Sample Keyboard", 
  "price": 5.0 
}


*Eğer ben id:100 olan ürünün tüm bilgilerini güncellemek istiyorsam "PUT" request gönderirim.
Yukarıdaki PATCH de gönderdiğim bodyi "PUT" ile gönderirsem price:5 yaparken diğer alanları bana
"null" olarak dönderecektir.


> PUT /product/100 
{ 
  "price": 5.0 
} 
 

> GET /product/100 
{ 
  "id": 100, 
  "createdAt": null, 
  "name": null, 
  "price": 5.0 
}


*/

describe('PUT', () => { 
  
    const url='https://jsonplaceholder.typicode.com/posts/1'

    it('PUT', () => {
        cy.request({
                 method:'PUT',
                 url:url,
                 body:{
                    "title": "Meu titulo"
                }
        }
        ).its('status').should('eql',200);
    });
 })