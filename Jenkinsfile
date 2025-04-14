pipeline {
  agent {
    docker {
      image 'cypress/included:12.5.0-node18.12.0'
      args '-v /var/run/docker.sock:/var/run/docker.sock -u root'
    }
  }

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
