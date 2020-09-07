import './App.css';

import React, { Component } from 'react'

import 'highlight.js';
import AppRouter from './app/router/app.router';

class App extends Component {
  render() {
    return (
      <AppRouter/>
    );
  }
}

export default App;