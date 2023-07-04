/// <reference types="cypress" />

describe('Drag And Drop', ()=>{

    it('Drag and Drop Test', ()=>{

        /*
        Cypress te sürükleme işlemini (tut bırak ) yapmak için "https://www.npmjs.com/package/@4tw/cypress-drag-drop"
        adresinden plugin yükleyeceğiz.Yüklediğimiz pluginleri package.json dosyasından görebilriz.

        import '@4tw/cypress-drag-drop' komutunu e2e.js sayfasına ekliyoruz
 
        */
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.wait(3000)
        cy.get('#column-a') //sürüklenecek web elementi
        .drag('#column-b') //web elementinin sürükleneceği yer

    
        

    })

    it('', ()=>{

    })
} )