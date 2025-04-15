pipeline {
  agent any

  environment {
    CYPRESS_IMAGE = 'cypress/included:12.5.0-node18.12.0'
  }

  stages {
    stage('Build') {
      steps {
        echo "🚀 Building application..."
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        echo "🚀 Testing application..."
        sh 'npm run test:e2e'
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
