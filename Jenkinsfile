pipeline {
  agent {
    docker {
      image 'cypress/browsers:node18.12.0-chrome107'
      args '-u root'
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
        echo "🚀 Testing application..."
        // sh 'npm run cypress:run'
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
