/// <reference types="cypress" />

describe('Before After', ()=>{
  before( ()=>{

    cy.log('Her test dosyasindan önce 1 kere calisacak ')

  } )

  after( ()=> {

    cy.log('Her test dosyasindan sonra 1 kere caliasacak')
  }
  )

  beforeEach(()=>{

    cy.log('Her testten önce 1 kere calisacak ')
  })

  afterEach(()=>{

    cy.log('Her testten sonra 1 kere calisacak')
  })





    it('Test Case 01', ()=>{
      cy.log('Test Case 01')

    })

    it('Test Case 02', ()=>{
     cy.log('Test Case 02')   

    })
} )