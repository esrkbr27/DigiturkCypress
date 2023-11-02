pipeline {
  agent any
  
  stages {
    stage('Test') {
      steps {
        // Proje deposunu çek
        git  'https://github.com/esrkbr27/DigiturkCypress.git'

        //npm yükle
          bat 'npm install'

        //kodu çalıştır.
          bat 'npx cypress run --browser chrome --spec cypress/e2e/day01/googlesearch.cy.js' 
      }
    }
    
    }
  }
