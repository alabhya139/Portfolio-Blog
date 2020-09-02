import React from 'react';
import './index.scss';


const FilterCard = (props) => {
    const { footer, iconWidth, iconSrc, title, listItem } = props;
    return (
        <div className="filter-card-wrapper">
            <div className="filter-card-header">
                <div className="filter-card-header-icon">
                    <img style={iconWidth && { width: `${iconWidth}px` }} src={iconSrc} alt="filter-icon"></img>
                </div>
                <div className="filter-card-header-title">
                    {title}
                </div>
            </div>
            <div className="filter-card-body">
                {listItem.map((item, index) => <div key={index} className="filter-list-item">{`${item}`}</div>)}
            </div>
            {
                footer &&
                <div className="filter-card-footer">

                </div>
            }
        </div>
    )
}

export default FilterCard;
