import './index.scss';

import React, { Component } from 'react';
import DashboardRouter from '../../router/dashboard.router';

class Dashboard extends Component {
  render() {
    return (
      <div className="main-app-container">
        <DashboardRouter/>
      </div>
    );
  }
}

export default Dashboard;