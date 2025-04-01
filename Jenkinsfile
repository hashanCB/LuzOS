pipeline{
   agent any
   environment{
         NODE_VERSION = '20.16.0'
   }
    stages{
        stage("Check Node"){
            steps{
                script{
                    sh 'node --version'

                }
            }
          
        }
    }
  
}