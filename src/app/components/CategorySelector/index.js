import React from 'react';
import './index.scss';

const CategoryFilter = (props) => {
    const { categoryName, onClickHandler, width, height } = props;
    return (
        <div
            style={{ width: `${width}`, height: height }}
            onClick={onClickHandler}
            className="category-filter-component">
            <div className="category-filter-name">
                {categoryName}
            </div>
            <div className="category-filter-cross">
                x
            </div>
        </div>
    )
}

export default CategoryFilter;
