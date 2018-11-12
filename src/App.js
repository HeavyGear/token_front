import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SignIn from './component/SignIn';
import Welcome from './component/Welcome';
import './App.css';

class App extends Component {
   render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={SignIn} />
            <Route exact path='/welcome' component={Welcome} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
