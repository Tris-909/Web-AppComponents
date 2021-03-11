import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PulseBoutique from './components/PulseBoutique/PulseBoutique';

const App = () => {
  return(
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/pulseboutique">
          <PulseBoutique />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
