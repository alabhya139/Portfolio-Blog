import React from 'react';
import './index.scss';

const Button = (props) => {
    const {buttonTitle, onClickHandler} = props;
    return (
        <div onClick={onClickHandler} className="button-component">
            {buttonTitle}
        </div>
    )
}

export default Button;
