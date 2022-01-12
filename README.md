# TAASSproject

# Structure

* Backend: 2 microservices on docker, gateway locally
* Frontend: frontend web with React.js + frontend mobile with React Native


# Backend

* Run the 2 microservices on docker separately:
For the backend follow the instruction https://github.com/AndreaMattone/Spike_SpringDockerPostgres
(open two intellij projects for each microservie and follow the steps for each project)

* Run the gateway in intellij

# FRONTEND
For the web frontend run on vscode terminal
/**
 * npm i react-router-dom         //Routing
 * npm install @mui/material      //UI
 * npm install @emotion/react
 * npm install @emotion/styled
 * npm i react-google-login       //google login
 * npm install axios              //Rest calls
 * npm install react-calendar     //calendar
*/

For the mobile frontend run on vscode terminal
/**
 * npm install react-calendar
 * npm install react-native-select-dropdown
 * npm install @react-navigation/native @react-navigation/native-stack        per navigare tra le pagine siccome non esiste il routing su native
 * expo install react-native-screens react-native-safe-area-context
*/

# Usage
Frontend ports:
* frontend web - localhost:3001
* frontend mobile - localhost:19002

Frontends calls directly microservices on 
* microservice 1 - localhost:8080
* microservice 2 - localhost:3001

To test the gateway call with postman localhost:8081, for example localhost:8081/api/v2/myUsers instead of localhost:3001/api/v2/myUsers, you will be directly routed to the microservice 2
