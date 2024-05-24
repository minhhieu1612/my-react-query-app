pipeline {
  agent {
    docker {
      image 'node:20.12.1-alpine3.19'
    }
  }

  stages{
      stage('build') {
        step {
          sh 'node -v'
        }
      }
  }
}