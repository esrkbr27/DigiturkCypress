/// <reference types="cypress" />


describe('Satış İlanı Ekle', ()=>{

    it('ilan ekle', ()=>{

        cy.visit('https://beksitealpha.kartega.com/anasayfa')
        cy.get('#username').type('test.uskudar')
        cy.get('#password').type('123123')
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()
        cy.wait(5000)
        cy.reload()
        cy.get('.layoutMainHeaderBottom-container--freeAd').click()
        cy.get('.ant-tabs-extra-content > .formSubmitButtonstyled__FormSubmitButtonStyled-sc-d9sal8-0 > .ant-btn').click()
        cy.get('.ant-form > .formResponsive-triple > .formDatePickerstyled__FormDatePickerStyled-sc-v97hi3-0 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-picker > .ant-picker-input').click()
        cy.wait(2000)
        cy.xpath("//td[@title='2023-11']").click()
    

    })

    it.only('Alış İlanı Ekle', ()=>{

        cy.visit('https://beksitealpha.kartega.com/anasayfa')
        cy.get('#username').type('test.uskudar')
        cy.get('#password').type('123123')
        cy.get('.ant-form-item-control-input-content > .ant-btn').click()
        cy.wait(5000)
        cy.reload()
        cy.get('.layoutMainHeaderBottom-container--freeAd').click()
        cy.get('.BnhIq > :nth-child(1) > :nth-child(1) > .ant-tabs-nav-wrap > .ant-tabs-nav-list > :nth-child(2)').click()
        cy.get('#rc-tabs-1-panel-2 > .myAdvertsSectionstyled__MyAdvertsSectionStyled-sc-6s38e8-0 > .tabCustomstyled__TabCustomStyled-sc-2j4pph-0 > .ant-tabs > .ant-tabs-nav > .ant-tabs-extra-content > .formSubmitButtonstyled__FormSubmitButtonStyled-sc-d9sal8-0 > .ant-btn > span').click()
        cy.wait(2000)
        cy.xpath("//*[@title='2023-11-03']//div[@class='ant-picker-cell-inner']").click()
        cy.wait(2000)
     
    })
} )