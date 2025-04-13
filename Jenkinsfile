pipeline {
  // agent {
  //   docker {
  //     image 'cypress/browsers:node18.12.0-chrome107' // Dùng image có sẵn của Cypress
  //     args '-u root:root' // Cho phép cài gói
  //   }
  // }

  // environment {
  //   HOME = '.'
  // }

  // stages {
  //   stage('Install dependencies') {
  //     steps {
  //       sh 'npm install'
  //     }
  //   }

  //   stage('Run Cypress Tests') {
  //     steps {
  //       sh 'npx cypress run'
  //     }
  //   }

    // Optional deploy stage
    // stage('Deploy') {
    //   steps {
    //     sh './deploy-script.sh'
    //   }
    // }
  // }

  // post {
  //   always {
  //     junit 'cypress/results/*.xml' // Nếu có export JUnit
  //     archiveArtifacts artifacts: 'cypress/videos/**', allowEmptyArchive: true
  //   }
  // }
  agent any

  // stages {
  //   stage('build') {
  //     steps {
  //       echo 'building the application...'
  //     }
  //   }

  //   stage('test') {
  //     steps {
  //       echo 'testing the application...'
  //     }
  //   }

  //   stage('deploy') {
  //     steps {
  //       echo 'deploy the application...'
  //     }
  //   }
  // }

  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run cypress:run'
      }
    }
    stage('Deploy') {
      when { branch 'main' }
      steps {
        sh './deploy.sh'
      }
    }
  }

}
