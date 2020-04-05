import React, { Component } from 'react';
import './App.css';
import Menu from '../menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nameContainer">
            <div className="name">
              Ghotala Bank
            </div>
          <Menu/>
        </div>
      </div>
    );
  }
}

export default App;
