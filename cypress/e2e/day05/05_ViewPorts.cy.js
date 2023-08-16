/// <reference types="cypress" />

describe('ViewPorts', ()=>{

    /*
    viewport() metodu Siteyi istediğimiz responsive boyutlarda test etmemizi sağlar.
    describe içerisindeki tüm testlerin o ölçüde çalışmasını istiyorsak beforeeach() metodunun
    içerisine fonksiyon tanımlayarak da yapabiliriz. 

     beforeEach('View Port', ()=>{
        cy.viewport(768,1024) 
  })

    */
 



    it('İphone-8', ()=>{
       
          cy.visit('https://digiturksite.kartega.com/')
          cy.viewport('iphone-8')
          cy.screenshot()

    })

    it('Pixel Test', ()=>{
     
          cy.visit('https://digiturksite.kartega.com/')
          cy.viewport(768,575)

    })
} )