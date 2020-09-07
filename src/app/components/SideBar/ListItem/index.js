import React from 'react';
import './index.scss';

function ListItem(props) {
    const {
        index,
        handleOnClick,
        style,
        icon,
        iconSrc,
        title,
        active
    } = props;

    return (
        <div onClick={() => handleOnClick(index)} style={style} className={`list-item-container ${active && 'active'}`}>
            {
                icon &&
                <div className="list-item-icon">
                    <img src={iconSrc} alt="list-item-icon"></img>
                </div>
            }

            {
                title &&
                <div className="list-item-title">
                    {title}
                </div>
            }
        </div>
    )
}

export default ListItem;
