import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Crud} from './containers/crud';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Crud/>
      </div>
    );
  }
}

export default App;
 