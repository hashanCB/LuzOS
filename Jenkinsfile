pipeline{
   agent any
   environment{
         NODE_VERSION = '20.16.0'
   }
    stages{
        stage("Repo Check"){
            step{
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
    }
  
}