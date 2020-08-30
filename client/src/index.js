/**
 * main application file, handles routes
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//local components
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import reducers from './reducers/index';
import { loadRegisters }  from  './actions/index';

// set data
reducers.dispatch(loadRegisters());

//routes
ReactDOM.render( 
    <Provider store={reducers}>
        <App/>
    </Provider> , 
    document.querySelector('#root'));

serviceWorker.register();


  