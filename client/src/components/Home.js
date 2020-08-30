/**
 * main page to describe app
 */
import React from "react";

const Home = () => {
        return <div>
            <h1>FORM MERN Stack APP!</h1>
            <hr/>
            <p>This application allows you to register users with name, 
                surname, email and event date. This project was developed with 
                MERN Stack (MongoDB, Express JS, React JS and Node JS).</p>
            <br/>
            <br/>
            <h3>INSTALATION</h3>    
            <br/>

            <ul>
                <li>Prepare database</li>
                <li>Add environment Variables in the folder</li>
                <li>Install the required modules in backend: npm install</li>
                <li>Install the required modules in frontend: cd client - npm install</li>
            </ul>
            <br/>

            <h3>RUN PROJECT</h3> 
            <br/>
            <ul>
                <li>npm run server-dev - to run the backend server</li>
                <li>npm run client-dev - to run the frontend server</li>
                <li>npm run start-dev - to run backend and frontend servers</li>
                <li>npm run test - to run the test in the backend server</li>
            </ul>
            

            <br/>

            <h3>DESCRIPTION</h3>
            <br/>

            <h4>Actions:</h4>
            <br/>

            <p>User can register a person with: first name, last name, e-mail and event date. </p>
            <p>User can get all registers in database.</p>
            <br/>

            <h4>User registration process:</h4>
            <br/>

            <p>User fill a form to create a new register. </p>
            <p>User sends data (POST requests to the server - HTTP).</p>
            <p>If data is ok, register is created in database.</p>
            <p>Server sends json with the status and the respective message.</p>

        </div>
    
}

export default Home;