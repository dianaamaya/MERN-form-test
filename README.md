# FORM MERN Stack

This application allows you to register users with name, surname, email and event date. This project was developed with MERN Stack (MongoDB, Express JS, React JS and Node JS).

## INSTALATION

1. prepare database
2. Add environment Variables in the folder ./.env
3. install the required modules in backend: npm install 
4. install the required modules in frontend: cd client - npm install

## RUN PROJECT

npm run server-dev - to run the backend server  
npm run client-dev - to run the frontend server  
npm run start-dev - to run backend and frontend servers
npm run server-test - to run the test in the backend server
npm run client-test - to run the test in the client server

## STRUCTURE

- client : frontend server
    - src : all client files
        - actions: it contains all actions and types handled in the client
        - components: it contains all reactjs components
        - reducers: it contains all reducers
        - index: file that handles all frontend side application
- server : backend server
    - controllers: make requests to the database (taking into account the model)
    - helpers: user data validation (sent as parameters)
    - models: database schemes
    - routes: handles requests made by the client (call the helper for form validation and then call the controller)
    - database: connection to the database
    - index: file that handles all backend side application
    - server: configurations of the backend server


## DESCRIPTION

**Actions:**

- User can register a person with: first name, last name, e-mail and event date. 
- User can get all registers in database

**User registration process:** 

- User fill a form to create a new register
- User sends data (POST requests to the server - HTTP)
- If data is ok, register is created in database
- server sends json with the status and the respective message 

