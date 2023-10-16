/// <reference types='cypress' />

const Ajv=require('ajv')
const avj=new Ajv()
describe('Json Schema', () => { 

/*
JSON Şeması, belirli bir uygulama için hangi JSON verilerinin gerekli olduğuna ve 
onunla nasıl etkileşim kurulacağına ilişkin bir format sağlayan bir IETF standardıdır.
 Bir JSON belgesi için bu tür standartları uygulamak, benzer JSON verileri genelinde tutarlılığı ve 
 veri geçerliliğini uygulamanıza olanak tanır.

 https://transform.tools/json-to-json-schema adresinde girdiğin json objesini
 schema ya çevirisini göstermektedir.

 **Install ajv library
 -> npm install ajv  -command promp/terminal

*/

    it('Json Schema', () => {
        
        cy.request({
            method:'GET',
            url:'https://fakestoreapi.com/products/'
        }).then((response)=>{

            const schema={
                "$schema": "http://json-schema.org/draft-07/schema#",
                "title": "Generated schema for Root",
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "number"
                    },
                    "title": {
                      "type": "string"
                    },
                    "price": {
                      "type": "number"
                    },
                    "description": {
                      "type": "string"
                    },
                    "category": {
                      "type": "string"
                    },
                    "image": {
                      "type": "string"
                    },
                    "rating": {
                      "type": "object",
                      "properties": {
                        "rate": {
                          "type": "number"
                        },
                        "count": {
                          "type": "number"
                        }
                      },
                      "required": [
                        "rate",
                        "count"
                      ]
                    }
                  },
                  "required": [
                    "id",
                    "title",
                    "price",
                    "description",
                    "category",
                    "image",
                    "rating"
                  ]
                }
              }//schema is end

               const validate=avj.compile(schema)

               const isvalid=validate(response.body)

               expect(isvalid).to.be.true;
        })
    });
 })