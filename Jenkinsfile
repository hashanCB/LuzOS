pipeline{
   agent any
   environment{
         NODE_VERSION = '20.16.0'
   }
    stages{
        stage("Repo Check"){
            steps{
                script{
                    git 'https://github.com/hashanCB/LuzOS'
                }
            }
        }
        stage("install Depens"){
            steps{
                script{
                    sh 'node --version'
                    sh 'npm install'
               

                }
            }
          
        }

        stage("GitIncrementVersion"){
            steps{
                script{
                   sh 'npm version patch --no-git-tag-version'

                    sleep(2)

                    
                    env.VERSION = sh(script: "node -p \"require('./package.json').version\"", returnStdout: true).trim()

                    echo "New version: ${env.VERSION}"
                }
            }
        }

        stage("Docker images Build"){
            steps{
                script{
                     echo "Building Docker image with version: ${env.VERSION}"
                     sh "docker build -t ${IMAGE_NAME}:${env.VERSION}   ."
                }
            }
        }
    }
  
}