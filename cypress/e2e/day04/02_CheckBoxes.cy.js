/// <reference types="cypress" />

describe('Check Boxes', ()=>{

    it('Single Check Box', ()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
          cy.visit('https://digiturksite.kartega.com/')
          //Paketleri tıkla
          cy.get('.has-submenu > [href="/package"]').click()
          //Tüm Paketleri Gör butonunu tıkla
          cy.wait(5000)
          cy.get('button>a', {force: true} ).scrollIntoView().wait(5000).click({force:true})
          cy.wait(5000)
          cy.get('#packageFilter-show.packageFilter-wrapper-bottom-left-wrapper-item',{timeout:10}).
          wait(5000).click({force:true})

          //Filtreler sayfasındaki check box ın 1. sinin tıklı olmadığını test ettik
          cy.get(':nth-child(1) > .filterPopUp-wrapper-center-item-wrapper > :nth-child(1) > .filterPopUp-wrapper-center-item-wrapper-property-left > .propertyDetailItem')
          .should('not.be.checked')

          //ilk check boxı tikledik ve tikli olduğunu doğruladık
          cy.get(':nth-child(1) > .filterPopUp-wrapper-center-item-wrapper > :nth-child(1) > .filterPopUp-wrapper-center-item-wrapper-property-left > .propertyDetailItem').check()
          cy.wait(3000)
          cy.get(':nth-child(1) > .filterPopUp-wrapper-center-item-wrapper > :nth-child(1) > .filterPopUp-wrapper-center-item-wrapper-property-left > .propertyDetailItem')
          .should('be.checked')

          cy.get(':nth-child(1) > .filterPopUp-wrapper-center-item-wrapper > :nth-child(1) > .filterPopUp-wrapper-center-item-wrapper-property-left > .propertyDetailItem').uncheck()
          .should('not.be.checked')

          //Yukarıda yazdığımız ilk check boxın locatini cypress almıştı, Bunun yerine seçeceğimiz 
          //checkboxların 1. sini seçtireceğimiz için tüm checkboxları içeren bir locate aldık(bunu cypress de öneriyor)
          //daha sonra ise first() metoduyla ilkini seçtik.
          cy.get("[type='checkbox']").first().check()
          
      
        

    })

    it('', ()=>{

    })
} )