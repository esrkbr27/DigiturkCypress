/// <reference types='cypress' />

describe('Authentication', () => { 

    //Github repomuza gidip "Seetings/DeveloperSettings/GenerateToken/Fine-grained personal access tokens "
    //adresinden tokenı alıp const değişkene atadık. 

    const token='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'

    it('Bearer Token Authenticate', () => {

        cy.request({
            method:'GET',
            url:'https://api.github.com/user/repos',
            headers:{
                Authorization:'Bearer'+ token,
            }
        }).then((response)=>{

            expect(response.status).to.eq(200)
            expect(response.body.full_name).to.eq('esrkbr27/API')
        })
        
    });
 })