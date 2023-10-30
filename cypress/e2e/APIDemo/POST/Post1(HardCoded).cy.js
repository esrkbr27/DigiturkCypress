/// <reference types='cypress'/>

/*

http://restapi.adequateshop.com/api/Tourist adresinde "POST" metodu ile yeni bir tourist
oluşturcağız fakat her defasıda unique datalar girmemizi isteyecek.Bunu yaparken 3 
farklı yöntem izleyebiliriz.Bu yöntemleri "Aproach" blokları içerisinde göstereceğiz.Post1 
Post2 ve Post3 classları içerisinde yazıldı

1)Approach1: Hard coded ;manuel olarak her defasında gelip const değişkeninde dataları
değişerek post yapabiliriz.

2)Approach2: Dinamik data kullanarak random metodu ile otomatik
her defasında yeni datalar kullanabiliriz.

3)Approach3: Fixture dosyasında body leri oluşturup çağ
*/





describe('POST REQUEST', () => { 

    it('Approach1 -Hard coded json object', () => {

        //requestBody hard coded
        //NOT:Email unique kabul ettiği için var olan emaili değişip post yapmak gerekir.
        const requestBody={ 
            
            tourist_name: "MSD",
            tourist_email: "INDCASH123@gmail.com",
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
                expect(response.body.tourist_name).to.eq('MSD')
                expect(response.body.tourist_email).to.eql('INDCASH123@gmail.com')
                expect(response.body.tourist_location).to.eq('India')
        })
        
        
    });


   

  
})