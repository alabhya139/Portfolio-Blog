import './App.css';

import React, { Component } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import history from './app/router/history';
import Loadable from 'react-loadable';
import SideBar from './app/components/SideBar';
import Loader from './app/components/Loader';

import 'highlightjs-line-numbers.js';


const Dashboard = Loadable({
  loader: () => import('./app/pages/Dashboard'),
  loading: Loader,
  delay: 300, // default 200 
  timeout: 8000
});



class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" render={props => (
            <div className="root-wrapper">
              <SideBar></SideBar>
              <Dashboard />
            </div>
          )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;