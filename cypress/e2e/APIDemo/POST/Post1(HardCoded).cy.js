/// <reference types='cypress'/>

/*

http://restapi.adequateshop.com/api/Tourist adresinde "POST" metodu ile yeni bir tourist
oluşturcağız fakat her defasıda unique datalar girmemizi isteyecek.Bunu yaparken 3 
farklı yöntem izleyebiliriz.Bu yöntemleri "Aproach" blokları içerisinde göstereceğiz.

1)Approach1: Hard coded ;manuel olarak her defasında gelip const değişkeninde dataları
değişerek post yapabiliriz.

2)Approach2: Dinamik data kullanarak random metodu ile otomatik
her defasında yeni datalar kullanabiliriz.

3)
*/





describe('POST REQUEST', () => { 

    it('Approach1 -Hard coded json object', () => {

        //requestBody hard coded
        //NOT:Email unique kabul ettiği için var olan emaili değişip post yapmak gerekir.
        const requestBody={ 
            
            tourist_name: "MSD",
            tourist_email: "INDCASH@gmail.com",
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
                expect(response.body.tourist_email).to.eql('INDCASH@gmail.com')
                expect(response.body.tourist_location).to.eq('India')
        })
        
        
    });


   

    it.only('Approach3 -Fixture class using json object', () => {
       
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