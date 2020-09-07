import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import Loadable from 'react-loadable';
import SideBar from '../components/SideBar';
import Loader from '../components/Loader';

const Dashboard = Loadable({
    loader: () => import('../pages/Dashboard'),
    loading: Loader,
    delay: 300, // default 200 
    timeout: 8000
});

const AppRouter = () => {
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
    )
}

export default AppRouter
