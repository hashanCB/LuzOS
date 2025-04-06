pipeline {
    agent any
    environment {
        NODE_VERSION = '20.16.0'
        IMAGE_NAME = 'luzos'  // Define your Docker image name
    }

    stages {
        stage("Repo Check") {
            steps {
                script {
                    git branch: 'main', 
                    credentialsId: 'github-credentials', 
                    url: 'https://github.com/hashanCB/mySongs'
                }
            }
        }
        
        stage("Install Dependencies") {
            steps {
                script {
                    sh 'node --version'
                    sh 'npm install'
                }
            }
        }

        stage("Git Increment Version") {
            steps {
                script {
                    // Increment version patch without creating a git tag
                    sh 'npm version patch --no-git-tag-version'
                    
                    // Retrieve the new version from package.json
                    env.VERSION = sh(script: "node -p \"require('./package.json').version\"", returnStdout: true).trim()
                    
                    echo "New version: ${env.VERSION}"
                }
            }
        }

        stage("Docker Image Build") {
            steps {
                script {
                    echo "Building Docker image with version: ${env.VERSION}"
                    sh "docker build -t ${IMAGE_NAME}:${env.VERSION} ."
                }
            }
        }
    }
}
