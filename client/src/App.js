import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Register} from './components/register/Register'
import {Login} from './components/login/Login'
import {State} from './components/state/State'


function App() {
  return (
    <div className="App">
      <Router className="router">
      <Switch>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route exact path="/home" component={State}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
