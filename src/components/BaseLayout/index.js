import React, { Component } from 'react';
import NavBar from '../NavBar'
import './index.css';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default BaseLayout;