/// <reference types="cypress" />

describe('Custom Command2', ()=>{

    it('Digiturk search Channel', ()=>{

      cy.search('A SPOR')

    })

    
    it.only('Search Package', ()=>{
       cy.search('Taraftar Paketi')
    
       cy.screenshot()
       //screenshot() metodu ile ekran görüntüsü alınıp screenshots klasöründe görüntülendi.
       /*terminale yazılan npx cypress run komutu ile tüm filderlarda yer alan test dosyaları çalıştırılır
         tüm testlerin videoları alınır.videos dosyasının altına gelir.Masaüstüne oluşturudğumuz 
         Cypress Project dosyasından videoları çalıştırabiliriz.
         Sadece fail olan dosyaların ekran görüntüsü alınır.
       */
    })})
  
