/// <reference types="cypress" />

/*
Post işlemi yaparken bodyde  ne göndereceğimizi,auth ile ne gönderceğimizi girilen siteden aldık.
firstname olan kısma istediğimiz dataları girdik.Testi çalıştırdıktan sonra
sitenin üzerinde sağ cliclk yAPIP incele deyince devtoolda Console yazan kısmı
açtık .Orda body nin içinde girdiğimiz dataları gördük, sistem bu datalara bir id veriyor
verilen booking id yi aldık.VScode daki thunder clientte new request yapıp end pointin
sonuna bize verilen id yi yazınca girdiğimiz dataları gördük ve api testinin 
doğru çalışıp çalışmadığına baktık.



*/

describe('POST with Auth', ()=>{

    it('Test', ()=>{

        cy.request({
            url:'https://restful-booker.herokuapp.com/booking',
            method:'POST',
            auth:{
                "username" : "admin",
                "password" : "password123"
            },
            body:{
                "firstname" : "Seda",
                "lastname" : "Dal",
                "totalprice" : 111,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2023-07-18",
                    "checkout" : "2023-07-25"
                },
                "additionalneeds" : "Breakfast"
            }
        }).then((response) =>{
            console.log(response)

            expect(response.status).to.eql(200)
            expect(response.body.booking.firstname).to.eq('Seda')
            expect(response.body.booking.lastname).to.eq('Dal')
            expect(response.body.booking.totalprice).to.eq(111)
            expect(response.body.booking.depositpaid).to.eq(true)
            expect(response.body.bookingdates.checkin).to.eq("2023-07-18")
            expect(response.body.bookingdates.checkout).to.eq("2023-07-25")

        })
    })


} )