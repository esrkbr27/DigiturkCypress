/// <reference types='cypress'/>

/*
Bazı apileri çağırmak için authorization kısmına token girmek gerekebilir.
Bunun için önce before metodu içerisine token alacağımız apiyi "POST"  yaptık
ve dönen response daki teken i "authToken" isminde bir değişkene atadık.
Daha sonra bu tokenı headers içeirisindeki " 'Authorization':'Bearer '+authToken " alanına tanımladık
ve böylece tüm orderları çağırabildik


*/
describe('Token', () => {

    let authToken=null;

   before('Creating acces token', ()=>{

       cy.request({

        method:'POST',
        url:'https://simple-books-api.glitch.me/api-clients/',
        headers:{
            'Content-Type':'application/json'
        },
        body:{
             
            clientName:'ABC',
            clientEmail:Math.random().toString(5).substring(2)+'@gmail.com'
            //emailde her defasında uniqe bir mail istediği için Math classındaki random() dan faydalandık.
        }
       }).then((response)=>{

            authToken=response.body.accessToken;
       });

   });



   before('Creating new order', ()=>{

    cy.request({

     method:'POST',
     url:'https://simple-books-api.glitch.me/orders',
     headers:{
         'Content-Type':'application/json',
         'Authorization':'Bearer '+authToken 
     },
     body:{
            "bookId": 1,
            "customerName": "shtbham"
          
     }
    }).then((response)=>{
       
        expect(response.status).to.eq(201);
        expect(response.body.created).to.eq(true)
          
    });

});

it('Fetching the orders', ()=>{

    cy.request({

        method:'GET',
        url:'https://simple-books-api.glitch.me/orders',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+authToken 
        },
        cookies:{
            'cookieName':'mycookie'
        }
    }).then((response)=>{

        expect(response.status).to.eq(200);
        expect(response.body).has.length(1);
    })
})



   


   
})