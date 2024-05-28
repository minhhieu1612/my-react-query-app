pipeline {
  agent {
    docker {
      image 'node:20.13.1-alpine3.19'
    }
  }

  stages{
      stage('build') {
        steps {
          bat 'node -v'
        }
      }
  }
}