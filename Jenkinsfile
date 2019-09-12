pipeline {
  environment {
    registry = "gaikwadamolraj/loopback4"
    registryCredential = 'dockerhub'
    dockerImage = ''
    appName = 'acme'
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/gaikwadamolraj/loopback4-nodejs.git'
      }
    }
    stage('Build') {
       steps {
         sh 'npm install'
       }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Delete prev app') {
        steps {
            sh "helm del --purge aceme"
        }
    }
    stage('Deploy to KUBERENTES') {
        steps {

            sh "helm install --name aceme ${pwd()}/aceme --set image.tag ${BUILD_NUMBER}"
            sh 'kubectl get svc aceme'
        }
    }
  }
}
