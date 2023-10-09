/// <reference types='cypress'/>

/*
                 GET REQUEST

*Serverdan istediğimiz requestleri listelemek için GET MTEODU kullanılır.Body ile herhangi bir 
sey gönderilmez.
*Sadece GET metoduna özgü olarak; request() fonksiyonunun içerisine komut yazılmadan da
GET Reuest yapabiliriz.                  


*/
describe('HTTP Request', () => {
const url='https://jsonplaceholder.typicode.com/posts'
it('Request01', () => {

    /*
     API testleri için demo https://jsonplaceholder.typicode.com/guide/ sitesini kullanacağız,
     GET request yapıp dönen responsun status kodunu doğruladık.GET metodu yapıyorsa request() 
     içerisine "GET" yazmayabiliriz.
     Testi iki türlü çalıştırabiliriz.
     1.Terminalden "npx cypress run --spec "Çalıştıracağımız pacakage ın dosya yolu"
     2.npx cypress open deyip spec ekranından da çalıştırabiliriz.
    
    */

    cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
    .its('status')
    .should('equal',200)
    .then((response) => console.log(response)); 

    /*
    then() içerisindeki console.log() metodu ile dönen responsu devtooldaki console kısmına yazdırmış olduk
     apı testinin devtooldaki networkde nasıl çalıştığını görmek için; spec ekranındaki sonuç kısmında koda
     sağ click yapıp incele dediğnde açılan devtoolda eş zamanlı görülebilir.

     */

    
});

//2.yol:
it.only('Request2', () => {

  cy.request(url).its('status').should('equal',200)
  .then((response)=> console.log(response));
      
});

})
