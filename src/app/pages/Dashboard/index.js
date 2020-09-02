import './index.scss';

import React, { Component } from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import history from '../../router/history';
import Loadable from 'react-loadable';
import Loader from '../../components/Loader';

const Home = Loadable({
  loader: () => import('../../containers/Home'),
  loading: Loader,
  delay: 300, // default 200 
  timeout: 8000
});

const Blogs = Loadable({
  loader: () => import('../../containers/Blogs'),
  loading: Loader,
  delay: 300, // default 200 
  timeout: 8000
});

const BlogEditor = Loadable({
  loader: () => import('../../containers/BlogEditor'),
  loading: Loader,
  delay: 300, // default 200 
  timeout: 8000
});



class Dashboard extends Component {
  render() {
    return (
      <div className="main-app-container">
        <Switch>
          <Route path='/home' render={props => (<Home {...props} />)} />
          <Route exact path='/blogs' render={props => (<Blogs {...props} />)} />
          <Route exact path='/blogs/edit' render={props => (<BlogEditor {...props} />)} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;