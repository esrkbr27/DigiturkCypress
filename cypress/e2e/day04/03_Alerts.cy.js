/// <reference types="cypress" />

describe('Alerts', ()=>{

    it('Alerts Test', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)
        cy.get(':nth-child(1) > button').click()

        //Cypress otomatik olarak çıkan alertteki  Tamam butonuna tıklar.

        //Tıkladıktan sonra çıkan sonuç yazısının doğrulamasını yaptık.
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    it('Accept Alert Test', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)

        //2 seçenek var, Tamam ve İptal
        //Cypress click deyince otomatik olarak Tamam butonuna tıklar.
        cy.get(':nth-child(2) > button').click()
        cy.get('#result').should('have.text','You clicked: Ok')

      

    })


    it('Alert Dismiss', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000) 
        cy.get(':nth-child(2) > button').click()

        //Cypress otomatik olarak Tamam butonuna tıklıyor ama ben İptal butonuna tıklamak istiyorum.
        //Bunun için "on" metodu kullanılır.
        //on JQuery bir fonksiyondur.Browserda açılan windowslar için kullanılır.
        cy.on('window:confirm', ()=>{
            return false
          //  return true default olarak gelir ve tamamı tıklar
        })
        cy.get('#result').should('have.text', 'You clicked: Cancel')


    })


    it.only('Alert Text', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)

        cy.window()//popup pencerelerini kontrol ediyor.
        .then(($windowsElement) => {
            //$windowsElement komutu ile prompta bilgi girer
            //returns() metodunun içine alerte yazacağımız texti yazdık
            cy.stub($windowsElement, 'prompt').returns('Cypress')
            cy.wait(3000)
        
        })
        cy.get(':nth-child(3) > button').click()
        cy.get('#result').should('have.text','You entered: Cypress')



      

    })
} )