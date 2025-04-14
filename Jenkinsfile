pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        echo "🚀 Building application..."
        // sh 'npm install'
        // sh 'npm run build'
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
