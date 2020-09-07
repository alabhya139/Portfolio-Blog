import React, { useState } from 'react';
import './index.scss';
import InputTextField from '../InputTextField'
import CategoryFilter from '../CategorySelector';

import { CATEGORY_LIST } from '../../utils/constants';
import Button from '../Button';

const BlogPostForm = (props) => {
    const [tagsArray] = useState([]);
    return (
        <div className="blog-post-form-component">
            <InputTextField
                labelName={"Author Name"}
                placeholder={"Please Enter Author Name"}
                value={""}
                onChangeHandle={_ => null}
            />
            <InputTextField
                labelName={"Blog Title"}
                placeholder={"Please Enter Blog Title"}
                value={""}
                onChangeHandle={_ => null}
            />
            <div className="filter-wrapper">
                <small className="filter-select-label">Please Select Appropiate Category*</small>
                {
                    CATEGORY_LIST.map((item, index) => (
                        <CategoryFilter
                            key={index}
                            width={"34%"}
                            height={24}
                            categoryName={item.categoryName}
                        />
                    ))
                }
            </div>
            <div className="filter-wrapper">
                <input type="text" placeholder="Enter Tags Name" className="filter-select-input"></input>
                {
                    tagsArray.map((item, index) => (
                        <CategoryFilter
                            key={index}
                            width={"34%"}
                            height={24}
                            categoryName={item.categoryName}
                        />
                    ))
                }
            </div>
            <Button
                buttonTitle={'SUBMIT'}
            />
        </div>
    )
}

export default BlogPostForm;
