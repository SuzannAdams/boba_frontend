import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <h1>Boba Clique</h1>
          </Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
