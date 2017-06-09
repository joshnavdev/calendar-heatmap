import React, { Component } from 'react';

import Day from './components/day';
import './App.css';


class App extends Component {
  render() {
    return (
      <Day postCount={5} />
    );
  }
}

export default App;
