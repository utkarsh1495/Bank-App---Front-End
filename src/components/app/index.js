import React, { Component } from 'react';
import './App.css';
import AppMenu from '../menu'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppMenu {...this.props}/>
      </React.Fragment>
    );
  }
}

export default App;
