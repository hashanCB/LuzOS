pipeline {
    agent any
    environment {
        NODE_VERSION = '20.16.0'
        IMAGE_NAME = 'luzos' 
    }

    stages {
        stage("Repo Check") {
            steps {
                checkout scm
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

        stage("Git Push Version Incremnt"){
            steps{
                script{
                      withCredentials([usernamePassword(credentialsId: 'macosweb', passwordVariable: 'PASS', usernameVariable: 'USER')]) { //github access key need to get anf  after jenkins cedination add username and password(key)
                        sh '''
                        git config --global user.email "hashan@Jenkins.com"
                        git config --global user.name "Jenkins"
                        git remote set-url origin https://${USER}:${PASS}@github.com/hashanCB/LuzOS.git
                        git add -A
                        git diff --staged --quiet || git commit -m "ci: version bump [ci skip]"
                        git push origin HEAD:main
                        '''
                    }
                }
            }
        }
    }
}
