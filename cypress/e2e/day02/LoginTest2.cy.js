/// <reference types="cypress" />



describe('Digiturk Login', ()=>{

    it('Login Test', ()=>{
      
        cy.visit('/')
        //1.yol:DOM da text olarak Giriş Yap olan elementi arar 
      //  cy.contains('Giriş Yap').click()

      //cypress te locateler css ile alınır.cypress kendi aldığı locate ile
      //çalışmadığında biz klasik yöntemlerle locate alırız. xpath olarak alıdığımız
      //locatetten sadece başındaki @ işaretini ve // tagları klaıdırıp içerdeki ' ' ları
      //" " ile değişiyoruz

      //2.yol:Locatei bu texti bunu içeren elementi tıkla
     //   cy.contains('[class="btn purple-primary-button transparentButton"]', 'Giriş Yap').click()
     //   cy.contains('li', 'Giriş Yap').click() (Li tagı içinde texti Giriş Yap olanlar)


     //3.yol: matchase:false olduğunda büyük küçük harf dikkate almadan metin olarak "GİRİŞ YAP" 
     //olam elementi tıkla  
        cy.contains('giriş yap', {matchCase: false}).click()



        //ASSERTİONS

        //1.yol:
        //url login kelimesini içeriyor mu?
        cy.url().should('contain', 'login')

        //2.yol
        //title | Digiturke EŞİT Mİ?
       cy.title().should('eq','| Digiturk')

       //3.yol: have.text
       //Locate edilen yerdeki metinde Giriş Yap yazıyor mu?
       cy.get('h2').should('have.text', 'Giriş Yap')

       //4.yol: be.visible verilen locate görünür mü?
       cy.get('.login-left-imgOne > img').should('be.visible')

       //5.yol: include.text
       cy.get('.login-right-button').should('include.text', 'Giriş Yap')

       //ana sayfadaki link  başlık sayısı
       cy.get('li a').should('have.length', 18)

       //find(): belirli bir html seçiminin alt elemanlarını bulmak için 
      cy.get('div').find('#UserName').should('be.visible')

      //within () metodu ile username elementini kliklemeye çalıştık.

      cy.get('div.login-right-usernameMail').within(()=> {
        cy.get('#UserName').click()
      })

      //Parent: div.login-right-usernameMail
      //Child:'#UserName

      /*
      Web elementleri ilk olarak get ile bulacagız.
      Eğer get() ile bulamazsak find() ile deneyeceğiz.
      find() ile de bulamazsak within() ile deneyeceğiz

      */
    })

    
} )