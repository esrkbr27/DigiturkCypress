/// <reference types="cypress" />
/*
Verilen jsonplaceholder sayfası api testleri yapılması için tasarlanmış,
request gönderip get post delete işlemleri yapabileceğimiz bir sitedir.
cy.request() metodu ile bir sorgu göndermiş oluyoruz.url kısmnı bir değişkene atayıp
kullanabileceğimiz gibi direk url kısmına yazarak da kullanabiliriz.
request() metodunun içine sadece url yazılırsa GET işlemi yapmış oluruz.
2. bir yol olarak da {} içerisine url ve methodları json formatına uygun
olarak yazıp sonra its() ile dönen responsun key kısmnı its() metodunun içine yazarak
should ile value ların doğrulamalarını yaparız.
Dönen responseu cypress runner ı çalıştırdıktan sonra kodun üzerine tıklayıp gelen sitede
İncele yaptıktan sonra devtool daki Console kısmında görebiliriz.
Ayrıca vscode daki thunder clienttede new request deyip url send yapılıncada dönen responsu
görebiliriz.

NOT:İstediğimiz keye ulaşmak için en yukarıdan aşağı doğru key üzerinden ilerlemek gerekir.

*/

describe('Simple API Test', ()=>{
    const requestURL="https://jsonplaceholder.cypress.io/comments"

    it('Header Assert1', ()=>{

       cy.request(requestURL).its('headers').its('content-type')
       .should('include','application/json; charset=utf-8') 

    })

    it('Header Assert2', ()=>{

        cy.request({
         url: requestURL,
       //url:'https://jsonplaceholder.cypress.io/comments'
         method:'GET'       
        }).its('headers').its('content-type').should('include','application/json; charset=utf-8') 

    })
} )