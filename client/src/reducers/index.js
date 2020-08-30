/**
 * main reducer file, handle reducers
 */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//local modules
import * as registers from './registers';

//es ejecutado cuando recibe un dispatch, hace algo, se puede
//manejar para que este evento no llegue a la funcion reductora
const logger = store => next => action => {
    let result= next(action)
    return result
}

//crea el store con la funcion reductora y el estado inicial
export default createStore(combineReducers(registers), applyMiddleware(logger, thunk));
