/// <reference types='cypress' />

/*
xml formatında data gönderip doğrulama yapmak için
aşagıdaki kütüphaneyi yüklüyoruz.

*** npm install xml2js

*/

const xml2js=require('xml2js');
const parser=new xml2js.Parser({
    explicitArray:false
});

describe('Parsing XML to JSON ', () => {
//xml formatındaki body i önce "https://tools.onecompiler.com/multiline-to-singleline"
//sitesinde tek satıra çevirdik.
    const xmlPayload="<Pet> 	<id>0</id> 	<Category> 		<id>0</id> 		<name>Dog</name> 	</Category> 	<name>Boncuk</name> 	<photoUrls> 		<photoUrl>string</photoUrl> 	</photoUrls> 	<tags> 		<Tag> 			<id>0</id> 			<name>string</name> 		</Tag> 	</tags> 	<status>available</status> </Pet>"
    let petID=null;

    before("Creating Pat", ()=>{
       
        cy.request({

            method:'POST',
            url:'https://petstore.swagger.io/v2/pet',
            body:xmlPayload,
            headers:{
                'Content-Type':'application/xml',//xml olarak body gönder
                'accept':'application/xml' //xml olarak response dön
            }
        })
        .then((response)=>{

            expect(response.status).to.eq(200)

            parser.parseString(response.body,(error,result)=>{
                petID=result.Pet.id;
            })


        })

    })


    it('Fetcing pet data,Parsing xml', () => {
        cy.request({

            method:'GET',
            url:'https://petstore.swagger.io/v2/pet/'+petID,
            headers:{
                'accept':'application/xml' //xml olarak response dön
            }
        })
        .then((response)=>{

            expect(response.status).to.eq(200)

            parser.parseString(response.body,(err,result)=>{
               
               expect(result.Pet.id).to.eq(petID) 
               expect(result.Pet.name).to.eq("Boncuk")
            })


        })

    });


})