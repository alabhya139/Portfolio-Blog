import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from '../components/Loader';

const Home = Loadable({
    loader: () => import('../containers/Home'),
    loading: Loader,
    delay: 300, // default 200 
    timeout: 8000
});

const Blogs = Loadable({
    loader: () => import('../containers/Blogs'),
    loading: Loader,
    delay: 300, // default 200 
    timeout: 8000
});

const BlogEditor = Loadable({
    loader: () => import('../containers/BlogEditor'),
    loading: Loader,
    delay: 300, // default 200 
    timeout: 8000
});

const DashboardRouter = () => {
    return (
        <Switch>
            <Route path='/home' render={props => (<Home {...props} />)} />
            <Route exact path='/blogs' render={props => (<Blogs {...props} />)} />
            <Route exact path='/blogs/edit' render={props => (<BlogEditor {...props} />)} />
        </Switch>
    )
}

export default DashboardRouter;
