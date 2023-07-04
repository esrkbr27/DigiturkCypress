/// <reference types="cypress" />

describe('Multiple Windows', ()=>{

    it('Removing Attribute', ()=>{

        /*
        Cypress de runner bir sayfadan açılan başka bir pencereye geçemez.
        Bu nedenle diğer tabda açılan pencerenin açıldığını ve var olan elementleri doğrulamak için
        2 yöntem kullanabiliriz.
        1. yöntem:
        =>html kodlarında target=_blank attribute ve değeri var olan elementleri boş bir sayfada aç demektir.
        Biz de js kodları ile target attribute ünün value sunu silerek bu elementlerin yeni sayfada açılmasını
        engellemiş oluruz ve aynı sayfada o sayfanın elementlerini görmüş ve doğrulamış oluruz.

        =>invoke() metounun içine remoteAttr yazarak yanına hangi attribute ün valusune sileceğimizi yazdık.
        ve arkasından bu elemente click yaptık.Böylece yeni tabda açılacak olan New Window yazısını runner aynı
        sayfada görmüş oldu ve should ile doğrulmasını yaptık.


        */
       cy.visit('https://the-internet.herokuapp.com/windows')
       cy.get('.example > a').invoke('removeAttr', 'target').click()
       cy.get('h3').should('have.text','New Window')

    })

    it.only('New Url', ()=>{
        /*
        2.Yöntem:
        => html kodlarında href attribute ne valu olarak açılacak sayfanın url i verilir.
        Biz de href attribute nün valuesunu bir değişkene atayıp visit ile runnerın bu url e gitmesini sağladık
        then metodunun içine element isminde bir fonksiyon tanımladık.Bu elementin prop metodu ile
        hrefin valusunu aldık.
        */
       cy.visit('https://the-internet.herokuapp.com/windows')
       cy.get('.example > a').then((element) =>{
        const newurl =element.prop('href')
        cy.visit(newurl)

        //prop ile href değerini aldık newurl ismindeki const değişkenine atadık.
       })

    })
} )
