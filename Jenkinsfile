pipeline {
  agent any
  
  stages {
    stage('Checkout') {
      steps {
        // Proje deposunu çek
        git  'https://github.com/esrkbr27/DigiturkCypress.git'
      }
    }
    
    stage('Install Dependencies') {
      steps {
        // Gerekli bağımlılıkları yükle
        sh 'npm install'
      }
    }
    
    stage('Run Tests') {
      steps {
        // Cypress testlerini çalıştır
        sh 'npx cypress run --browser chrome --spec cypress/e2e/day01/Digiturksearch.cy.js'
      }
    }
    
    stage('Publish Reports') {
      steps {
        // Test raporlarını yayınla
        sh 'npx cypress run --record --key <CYPRESS_RECORD_KEY>'
      }
    }
  }
}