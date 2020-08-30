/**
 * Action creators
 * 
 * In this file, actions are created/returned * 
 * actions are dispatched using middlewares (redux-thunk) that handle reducers
 */

import axios from 'axios';

//type of actions
import { REGISTER_USER, REGISTER_USER_ERROR, GET_DATA } from './types';


/**
  * use the form data and make HTTP request (with axios) to the server 
  * dispatch user just registered / dispatch error
  * 
  * @param {Object} data - registration form data 
  */
  const RegisterUser = data => {
    return async dispatch => {
      try {
        await axios.post('http://localhost:4000/api/users', data);
        dispatch({
          type: REGISTER_USER,
          payload: "User was registered"
        });
      } catch(err) {
        
        let message = "something was wrong, please reload the page and try again";
        if(err.response.data.error) message = err.response.data.error;
        //console.log(err.response.status);
        //console.log(err.response.headers);
        //console.log(err.response.data);
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: message
        })
      }
    };
  }

 
/**
  * get all registers,  
  * make HTTP request (with axios) to the server,
  * dispatch users registered 
  */
  const loadRegisters = () => dispatch => {
   // console.log("obteniendo datos");

     return  axios.get('http://localhost:4000/api/users')
        .then( response => {
            dispatch ({
                type:GET_DATA,
                payload: response.data 
            })          
        })
    
}

export { RegisterUser, loadRegisters };