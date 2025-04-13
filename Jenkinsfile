pipeline {
  agent {
    docker {
      image 'cypress/browsers:node18.12.0-chrome107'
      args '-u root' // Nếu cần quyền root để cài npm packages
    }
  }

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
      when {
        branch 'main'
      }
      steps {
        echo "🚀 Deploying application..."
      }
    }
  }
}
