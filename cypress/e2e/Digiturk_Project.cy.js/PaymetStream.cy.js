/// <reference types="cypress" />

describe('Paketler', ()=>{

    it.only('TV Paketleri Sporun Yildizi', ()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
          cy.visit('https://digiturksite.kartega.com/')
          cy.get('.cookies-closeIcon > img').click()
          //Paketleri tıkla
          cy.get('.has-submenu > [href="/package"]').click()

          //Sporun Yıldızı Paketindeki Detaylı İncele butonuna tıkla
          cy.get('[aria-label="3 / 3"] > .card > .card-detailButton > #packageInfo').click({force:true})

          //Digiturke zaten üye misiniz pop upının açıldığını doğrula  
          cy.get('.popupInformationActionSecond-wrapper').should('be.visible')

          //Hayır butonuna tıkla
          cy.get('#popupInformationActionReject').click()


         //Açılan pencerede Paket Kapsamı altında Sporun Yıldızı yazdığını doğrula 
          cy.get('#content-1 > .packageDetail-wrapper-mobileTabs-tab-left > .packageDetail-wrapper-mobileTabs-tab-left-packageName').
          should('be.visible')

          //Devam Et butonuna tıkla
          cy.get('.containerSmall > #content-1').click({force:true})

          //Takım Seç sayfasının geldiğini doğrula
          cy.get('#content-2 > .packageDetail-wrapper-mobileTabs-tab-left > .packageDetail-wrapper-mobileTabs-tab-left-title').
          should('be.visible')

          //İlk Takımı Seç
        //  cy.get(':nth-child(1) > .team-wrapper > .team-wrapper-select').click()

          cy.get('.team-wrapper-select-check').first().click({force:true})

          //Sonraki Adıma Devam Et butonunu tıkla
          cy.get('.containerSmall > #content-2').click({force:true})



    })

    
} )