pipeline {
  agent {
    docker {
      dockerfile true
    }
  }

  // environment {
  //   WORKSPACE = '//C:/ProgramData/Jenkins/.jenkins/workspace/my-setup_main'
  // }

  stages{
      stage('build') {
        steps {
          bat 'node -v'
        }
      }
  }
}