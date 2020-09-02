import React from 'react'
import './index.scss';

import FACEBOOK from '../../../assets/images/ic_facebook.png';
import GITHUB from '../../../assets/images/ic_github.png';
import LINKEDIN from '../../../assets/images/ic_linkedin.png';
import ANGELLIST from '../../../assets/images/ic_angellist.png';

export const InfoContainer = () => {
    return (
        <div className="info-container">
            <div className="product-name">
                {`sui generis`}
            </div>
            <div className="product-slogan">
                {`Ideas | Ambitions | Experiments`}
            </div>
            <div className="author-name">
                {`~ By Alabhya Pandey`}
            </div>
            <div className="social-sites">
                <div className="github-link">
                    <img src={GITHUB} alt="github-link"></img>
                </div>
                <div className="linkedin-link">
                    <img src={LINKEDIN} alt="linkedin-link"></img>
                </div>
                <div className="facebook-link">
                    <img src={FACEBOOK} alt="facebook-link"></img>
                </div>
                <div className="angellist-link">
                    <img style={{width: 28}} src={ANGELLIST} alt="angellist-link"></img>
                </div>
            </div>
        </div>
    )
}
