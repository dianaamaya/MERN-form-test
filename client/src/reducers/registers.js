/**
 * handle states and error messages in the registration process
 */
//type of actions
import { REGISTER_USER, REGISTER_USER_ERROR, GET_DATA } from '../actions/types';

//previous state
const DEFAULT_STATE = {
  errorMessage: '',
  successMessage: '',
  data:[]
}

/**
 * auth reducers
 * 
 * @param {Object} state - previous state
 * @param {Object} action - variables registered in the application
 */
const registers = (state = DEFAULT_STATE, action) => {

  switch(action.type) {

    case REGISTER_USER:
      //console.log(action.payload);
      return { ...state, errorMessage: '', successMessage:action.payload }
    case REGISTER_USER_ERROR:
      //console.log(action.payload);
      return { ...state, errorMessage: action.payload, successMessage:'' }
    case GET_DATA:
      return { ...state, data: action.payload }
    default:
      return state

  }

  
}


export { registers };