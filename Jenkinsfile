pipeline {
    agent any

    stages {
        stage('Initiating repository...') {
            steps {
                bat 'npm install'
            }
        }
        stage('Running unit tests...') {
            steps {
                bat 'npm run unit:test'
            }
        }
        stage('Running api tests...') {
            steps {
                bat 'npm run api:test'
            }
        }
        stage('Running wdio + cucumber tests...') {
            steps {
                bat 'npm run ui:test'
            }
        }
        stage('Opening allure report...') {
            steps {
                bat 'npm run ui:report'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'ui/assets/allure-results/**/*.*', fingerprint: true
            clearWs()
        }
    }
}