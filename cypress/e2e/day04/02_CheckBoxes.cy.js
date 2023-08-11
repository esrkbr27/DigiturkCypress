/// <reference types="cypress" />

describe('Check Boxes', ()=>{

    it.skip('Single Check Box', ()=>{
    
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

          //işaretlediğimiz tiki kaldırdık()
          cy.get(':nth-child(1) > .filterPopUp-wrapper-center-item-wrapper > :nth-child(1) > .filterPopUp-wrapper-center-item-wrapper-property-left > .propertyDetailItem').uncheck()
          .should('not.be.checked')

         
          
      
        

    })

    it.only('All CheckBoxes 1', ()=>{

          cy.visit('https://digiturksite.kartega.com/')
          //Paketleri tıkla
          cy.get('.has-submenu > [href="/package"]').click()
          //Tüm Paketleri Gör butonunu tıkla
          cy.wait(3000)
        //  cy.get('button>a', {force: true} ).scrollIntoView().wait(5000).click({force:true})

        //Diğer Filtreleri tıklA
          cy.get('#packageFilter-show.packageFilter-wrapper-bottom-left-wrapper-item',{timeout:10}).
          wait(3000).click({force:true})

          //Tüm checkboxları tıklamak için check() metodu kullanılır
          cy.get("[type='checkbox']").check()
          cy.wait(3000)

          //Seçili tüm  checkboxları kaldırmak için uncheck() metodu kullanılır
          cy.get("[type='checkbox']").uncheck()


          cy.get("[type='checkbox']").first().click()
        
         

    })

    it('All Checkboxes 2', ()=>{
      
          cy.visit('https://digiturksite.kartega.com/')
          //Paketleri tıkla
          cy.get('.has-submenu > [href="/package"]').click()
          //Tüm Paketleri Gör butonunu tıkla
          cy.wait(5000)
          cy.get('button>a', {force: true} ).scrollIntoView().wait(5000).click({force:true})
          cy.wait(5000)
          //Diğer Filtreleri tıkla
          cy.get('#packageFilter-show.packageFilter-wrapper-bottom-left-wrapper-item',{timeout:10}).
          wait(5000).click({force:true})

            //Yukarıda yazdığımız ilk check boxın locatini cypress almıştı, Bunun yerine seçeceğimiz 
          //checkboxların 1. sini seçtireceğimiz için tüm checkboxları içeren bir locate aldık(bunu cypress de öneriyor)
          //daha sonra ise first() metoduyla ilkini seçtik.

          //First() metoduyla ilk kutuyu tıkladık
          // cy.get("[type='checkbox']").first().click()

          //1. Kutuyu indexle tıkladık ve tıklandığını be.checked ile doğruladık
          
          cy.get("[type='checkbox']").eq(0).click().should('be.checked')


          //5. kutuyu tıkladık, tüm tikleri kaldırdık ve not.be.checked metodu ile kaldırıldığını doğruladık
          cy.get("[type='checkbox']").eq(4).click()
          cy.get("[type='checkbox']").uncheck().should('not.be.checked')





    })
} )