import React from 'react';
import './index.scss';

const InputTextField = (props) => {
    const { placeholder, value, labelName } = props;
    return (
        <div className="input-text-field-component">
            <label className="input-text-field-label">{labelName}</label>
            <input
                type="text"
                className="input-text-field"
                value={value}
                onChange={_ => null}
                placeholder={placeholder}>
            </input>
        </div>
    )
}

export default InputTextField
