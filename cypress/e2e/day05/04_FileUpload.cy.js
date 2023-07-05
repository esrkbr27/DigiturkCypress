/// <reference types="cypress" />

describe('File Upload', ()=>{
    /*
    File upload yapmak için "https://www.npmjs.com/package/cypress-file-upload" adresine gidilir.
    "npm install --save-dev cypress-file-upload" komutu terminale yazılır.
    import 'cypress-file-upload'; e2e classına ekledik
    */

    it('Single File Upload', ()=>{
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
  

      const path1="C:\Users\esra.demirci\Desktop\CypressProject\cypress\screenshots\image (3).png"
      cy.get('#filesToUpload').attachFile(path1)
      cy.fixture(path1)


    })
    })
