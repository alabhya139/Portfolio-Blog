import React from 'react';

import './index.scss';
import history from '../../router/history';

const LandingPage = (props) => {
    console.log("Hello")
    return (
        <div className="page-background">
            <div className="page-title">
                SpaceX Dashboard
            </div>
            <div onClick={()=>{history.push('/dashboard')}} className="get-started-btn">
                <div className="btn-title">
                    Get Started
                </div>
            </div>
        </div>
    );
}

export default LandingPage;