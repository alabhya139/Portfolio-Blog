import React from 'react';

import './index.scss';

export const Card = (props) => {
    return (
        <div onClick={props.onClick} className="card">
            <div className="card-header">
                <div className="title">
                    {props.title}
                </div>
                <div className="card-info">
                    <div className="serial">
                       C101 
                    </div>
                    <div className="item-id">
                       DRAGON-1
                    </div>
                </div>
            </div>
        </div>
    );
}