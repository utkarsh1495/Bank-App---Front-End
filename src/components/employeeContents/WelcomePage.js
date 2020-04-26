import React, { Component } from 'react';

class WelcomePage extends Component {
  render() {
    return (
      <div>
          <h2>Welcome {this.props.userName}</h2>
          <h4>
              From here you can manage all the banking facilities.
          </h4>
      </div>
    );
  }
}

export default WelcomePage;

