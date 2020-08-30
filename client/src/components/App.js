/**
 * display the menu and content of the app
 */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// local resources
import Header from './Header';
import Home from './Home';
import Register from './Register';

export default class App extends Component {

  render() {
    return (
      
      <BrowserRouter>
        <Header />
        <div className="container">          
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />         
        </div>
      </BrowserRouter>
  
    );
  }
}

//export default connect(null, actions)(App);