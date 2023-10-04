/// <reference types="cypress" />

describe('ReadFile & Assert', ()=>{

    it('Assert', ()=>{

       cy.readFile('./cypress/fixtures/users (1).json').then((userdata) => {

        /*
        Json formatında iç içe datalar olduğunda istediğimiz yere ulaşıp 
        doğrulamak için id lere index ile ulaştık.İndex 0 dan başladığı için;
        id:1 0. indexe karşı gelir.
        */
      
         expect(userdata[3].name).to.equal('Patricia Lebsack')
         expect(userdata[3].username).to.eq('Karianne')
         expect(userdata[3].address.street).to.eq('Hoeger Mall')
         expect(userdata[3].company.name).to.equal('Robel-Corkery')


       })
    })

   
} )