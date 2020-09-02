import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';

const Home = Loadable({
  loader: () => import('../pages/LandingPage'),
  loading: 'loading...',
  delay: 300, // default 200 
  timeout: 8000
});

const Dashboard = Loadable({
    loader: () => import('../pages/Dashboard'),
    loading: 'loading...',
    delay: 300, // default 200 
    timeout: 8000
  });

class Router extends Component {
  render() {
    return (
      <Switch>
          <Route exact path="/home" component={ Home } />
          <Route path="/dashboard" component={ Dashboard } />
      </Switch >
    );
  }
}

export default withRouter(Router);