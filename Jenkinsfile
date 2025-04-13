pipeline {
  agent {
    docker {
      image 'cypress/browsers:node18.12.0-chrome107' // Dùng image có sẵn của Cypress
      args '-u root:root' // Cho phép cài gói
    }
  }

  environment {
    HOME = '.'
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run'
      }
    }

    // Optional deploy stage
    // stage('Deploy') {
    //   steps {
    //     sh './deploy-script.sh'
    //   }
    // }
  }

  post {
    always {
      junit 'cypress/results/*.xml' // Nếu có export JUnit
      archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
    }
  }
}
