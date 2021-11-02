import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Counter } from '../Counter';
import MainHeader from '../header';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <MainHeader />
        <div className='App'>
          <Switch>
            <Route path='/' component={Counter} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
