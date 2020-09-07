import React from 'react';
import './index.scss';

const IconButton = (props) => {
    const { iconSrc, value, width, animated, fontSize, fontWeight, onClickHandler } = props;
    let valueStyle = {
        fontSize,
        fontWeight
    }
    return (
        <div onClick={onClickHandler} className="icon-button">
            <div className="button-icon">
                <img
                    className={animated ? `scale-animation` : ''}
                    style={width && { width: `${width}px` }}
                    src={iconSrc}
                    alt="button-icon">
                </img>
            </div>
            <div style={valueStyle} className="button-value">
                {value}
            </div>
        </div>
    )
}

export default IconButton;
