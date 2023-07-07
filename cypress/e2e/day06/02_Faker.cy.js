/// <reference types="cypress" />
import { faker } from '@faker-js/faker';


describe('Using Faker', ()=>{

    it('Faker Login Test', ()=>{

        /*Faker kullanmak için https://www.npmjs.com/package/@fakerjs/faker adresine gidilir.
        npm i @fakerjs/faker komutu terminale yazılır.
        classın içerisinden faker import edilir.Bir classa 
        import faker from '@fakerjs/faker';

        */
       cy.visit('https://www.automationexercise.com/login')
       
       //email adresini faker classtan alıp değişkene atadık.
       let email = faker.internet.email()
       cy.get('[data-qa="signup-name"]').type(email)
       cy.wait(2000)

       //Sitede passworde @ işareti girmeyince hata verdiği için email yazdık
       let password = faker.internet.email()
       cy.get('[data-qa="signup-email"]').type(password)
       cy.wait(1000)

       //Signup butonuna bas
       cy.get('[data-qa="signup-button"]').click().wait(1000)

       //Mrs. tıkla
       cy.get('#id_gender2').click()
       cy.wait(1000)

       //Name gir(İsim girmek için person metodu kullanılır.)
     //  Name alanına diğer tarafta girilen isim otomatik olarak geliyor
       
      //Password gir
       let passwrd= faker.number.int({max:10})
      cy.get('[data-qa="password"]').type(passwrd)

      //Date 27 seç
      cy.get('[data-qa="days"]').select('27')

      //Month April seç
      cy.get('[data-qa="months"]').select('April')

      //Yılı 1989 seç
      cy.get('[data-qa="years"]').select('1989')

      //First name gir
      let name =faker.person.firstName('female')
      cy.get('[data-qa="first_name"]').type(name)

      //Lastname gir

      let lastname= faker.person.lastName()
      cy.get('[data-qa="last_name"]').type(lastname)
      
     //Adres gir 
     let adress= faker.location.street()
     
        cy.get('[data-qa="address"]').type(adress)

     //state gir
       let state= faker.location.state()   
       cy.get('[data-qa="state"]').type(state)

     //city gir
      let city=faker.location.city()
      cy.get('[data-qa="city"]').type(city)

      //zipcode gir
     let zipcode=faker.location.zipCode()
     cy.get('[data-qa="zipcode"]').type(zipcode)

     //mobile number gir
     let number=faker.phone.number()
     cy.get('[data-qa="mobile_number"]').type(number)

     //Create an account
     cy.get('[data-qa="create-account"]').click()

     //Account created yazisinin geldiği doğrulanır.
     cy.get('b').should('be.visible')
        

    })

   



    
} )


