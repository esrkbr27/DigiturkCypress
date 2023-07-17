/// <reference types="cypress" />

describe('Write & Read File', ()=>{

    it('Write File', ()=>{
    /*
    Cypresste dosya oluşturmak için writeFile metodunu kullanırız
    Dosyayı nerede oluşturmak istiyorsak önce oranın dosya yolunu yazıp,
    sonrasında , koyup yazmak istediğimiz texti yazarız.
    {flag: +a} yazdıklarımı bir öncekini silmeden satırı dosyaya kayeder. arda arda yazmamızı sağlar.
    \n ise alt satıra geçerek yazmamızı sağlar.
    */
        cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt', 'CYPRESS NOTES\n')
        cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt', '1)Cypress Install\n',{flag: 'a+'})
        cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt', '2)Plugins\n', {flag: 'a+'})

    })

    it('Read File', ()=>{

        cy.readFile('./cypress/e2e/day07/03_NotDefteri.txt').should('contain', 'Plugins')

    })
} )