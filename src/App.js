import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Post from './Post'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/post" component={Post} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
