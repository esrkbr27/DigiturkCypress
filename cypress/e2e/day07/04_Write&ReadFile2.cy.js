/// <reference types="cypress" />

describe('Write & Read File', ()=>{
    /*
     Burada da json formatında bir dosya oluşturu

    */

    it('Write&Read JSON File', ()=>{

        cy.writeFile('./cypress/e2e/day07/04_UserData.json', {
            name: 'Eliza', email: 'eliza.example.com'
        })

        cy.readFile('./cypress/e2e/day07/04_UserData.json').then((user) => {
            expect(user.name).to.eq('Eliza')
            expect(user.email).to.eql('eliza.example.com')

            //expect metodu da bir çeşit assertiondır.(Chai kütüphanesinden)

        })


    })

   
} )