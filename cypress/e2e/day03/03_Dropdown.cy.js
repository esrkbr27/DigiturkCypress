/// <reference types="cypress" />

describe('Dropdown', ()=>{

    it('Test Case', ()=>{
      
        cy.visit('https://the-internet.herokuapp.com/dropdown')

        //select komutunun içine seçenekte gördüğümüz yazıyı yazdık
        cy.get('#dropdown').select('Option 1').should('have.value',1)
        //have.value bu elementin value değeri 1 mi doğruladık.

        cy.get('#dropdown').select('Option 2').should('have.value',2) 
    })

    it.only('Amazon select', () => {
        //Amazona git
        cy.visit('https://www.amazon.com.tr/gcx/Herkes-%C4%B0%C3%A7in-Hediyeler/gfhz/?ref_=nav_cs_giftfinder&scrollState=eyJpdGVtSW5kZXgiOjAsInNjcm9sbE9mZnNldCI6NDkxLjcxMTk3NTA5NzY1NjI1fQ%3D%3D&sectionManagerState=eyJzZWN0aW9uVHlwZUVuZEluZGV4Ijp7ImFtYWJvdCI6MH19')
        
        //Çerezleri kabul et
        cy.get('#sp-cc-rejectall-link').click()

        //Tüm Kategorilerden "Bebek" seçeneğini tıkla ve Bebek i seçtiğini doğrula

        cy.get('#searchDropdownBox').select('Bebek').should('have.value','search-alias=baby')

        //* have.value doğrulamasındaki value; elementin inspect yapıldığındaki value attributeünün değeridir.
        

      
        
    });

   
} )