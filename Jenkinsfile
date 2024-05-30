pipeline {
  agent {
    docker {
      image 'node:20.13.1-alpine3.19'
    }
  }

  env.WORKSPACE = '\\C:\ProgramData\Jenkins\.jenkins\workspace\my-setup_main'

  stages{
      stage('build') {
        steps {
          bat 'node -v'
        }
      }
  }
}