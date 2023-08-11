/// <reference types="cypress" />

describe('Scroll ', ()=>{

    it('Scroll İnto View', ()=>{
    
          cy.visit('https://digiturksite.kartega.com/')
          cy.wait(3000)
       //   cy.get('.activeAccordion-desktop > .accordionDg-wrapper-wholeAccordion-accordion-circleIcon').scrollIntoView()
        //  cy.get('.channelIntroduction-content-button > input').scrollIntoView({duration:8000})

          //8 saniye içerisinde verilen elemente scroll yap

          //scrollTo(x,y)

          cy.scrollTo(0,0)
          cy.wait(3000)
          cy.scrollTo(0,500)

          //Sitede footerda yer alan İletişime scroll yap ve tıkla
          cy.get(':nth-child(1) > [href="/contactForm"]').scrollIntoView().click()
    })

    
} )