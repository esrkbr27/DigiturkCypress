/// <reference types="cypress" />

describe('İframe', ()=>{

    it('İframe Test', ()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')


       /*
         İframe ulaşmak için yapılması gerekenler:

         1.Plugin indiririlir.Bunun için;
        " https://www.npmjs.com/" sitesine gidilip Cypress iframe aratılır.
        Cypress iframe sayfasında terminale "npm install -D cypress-iframe" komutu yazılır.

        2.İmport plugin
        support dosyasında yer alan e2e.js dosyasına require('cypress-iframe'); veya import 'cypress-iframe';
        komutlarını yazarız.

        3.Bu işlemlerden sonra cy.frameLoaded() komutuna ve cy.iframe  kullanabiliriz.


       */
        
        //iframe girmek için
        cy.frameLoaded('#mce_0_ifr')
        //driver.switchTo().frame()

        //iframe in içindeki p tagı olan elementi bul ve içindeki yazıyı sildik.
        cy.iframe().find('p').clear()

        //Sildiğimiz alana "Cypress was here" yazdık
        cy.iframe().find('p').type('Cypress was here')

        //body aşağısındaki yazıyı doğruladık
        cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium').click()



        
    })

    
} )