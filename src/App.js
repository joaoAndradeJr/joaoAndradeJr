import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}

export default App;
