/// <reference types="cypress" />

describe('Json Object', ()=>{

    it('Json Object', ()=>{
       
        cy.visit('https://digiturksite.kartega.com')

        const simpleobject= {"key1":"value1",
        "key2":"value2","key3":"value3" }

        //sitenin devtool kısmındaki Console tabında aşağıdaki değerleri konsola yazdırır.
        console.log(simpleobject.key1) //value1 değerini verir
        console.log(simpleobject.key2) //value2 değerini verir.
        console.log(simpleobject["key3"]) //value3 değerini verir

        //arraydeki 1. indexi yazdırdı.
        const simpleArrayOfValue=["one","two","three"]
        console.log(simpleArrayOfValue[1])


        //Array içindeki objeye ulaşma;
        const arrayObject=[{"key1":"value1"}, { "key2":"value2"},{"key3":"value3"}]
        console.log(arrayObject[2].key3) //value 3 yazdırır

        const dataType= {"string":"metin", "number":12}

        const body ={
            "Students":[
                {"FirstName": "Sena","LastName": "Deniz"},
                {"FirstName": "Yusuf","LastName": "Koca"},
                {"FirstName": "Ali", "LastName": "Veli"}
            ]
        }

        console.log(body.Students[2].LastName) //Veli
        console.log(body.Students[1].FirstName)//Yusuf
        console.log(body) //tamamı


    })

  
} )