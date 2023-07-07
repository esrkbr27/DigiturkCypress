/// <reference types="cypress" />

describe('File Upload', ()=>{
    /*
    File upload yapmak için "https://www.npmjs.com/package/cypress-file-upload" adresine gidilir.
    "npm install --save-dev cypress-file-upload" komutu terminale yazılır.
    import 'cypress-file-upload'; e2e classına ekledik
    */

    it('Single File Upload', ()=>{

      //Sayfaya git
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
  

      //Dosya seç butonunun locateini alıp. attachFile() metodunun içine dosya yolunu yazdık.
      //Resmin yolunu const değişkene atadık.
      //Cypress file upload ederken direk fixtures dosyasına baktığı için
      //yol olarak sadece image in ismini değişkene yazdık
      const path1="image (4).png"
      cy.get('#filesToUpload').attachFile(path1)
      cy.get('#fileList > li').should('include.text', 'image (4).png')

    })

    it('Multiple Files Upload 1', ()=>{
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

      const path1="image (4).png"
      const path2="image (5).png"
      const path3="MicrosoftTeams-image (9).png"

      cy.get('#filesToUpload')
      .attachFile(path1)
      .attachFile(path2)
      .attachFile(path3)


    })

    it('Multiple Files Upload 2', ()=>{

      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

      const path1="image (4).png"
      const path2="image (5).png"
      const path3="MicrosoftTeams-image (9).png"
      cy.get('#filesToUpload').attachFile([path1,path2,path3])

      cy.get('#fileList > :nth-child(1)').should('have.text','image (4).png')
      cy.get('#fileList > :nth-child(2)').should('contain.text','image (5).png')
      cy.get('#fileList > :nth-child(3)').should('include.text','MicrosoftTeams-image (9).png')

      //Assertion yaparken have.text metodunda metin birebir aynı olmalı
      //contain  ve include.text metodlarında ise aradığımız kelimeyi içermesi
      //yeterli

    })

    it.only('OverWrite File Name', ()=>{

      //Yüklediğimiz dosyanın ismini değişmek için;
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
      const path1="image (4).png"
      cy.get('#filesToUpload').attachFile({filePath:path1, fileName:'Resim 4'})

    })



    })
