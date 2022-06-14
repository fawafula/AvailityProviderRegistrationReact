import React from 'react'
import "./formInput.css";
import { useState } from 'react';


export const FormInput = (props) => {

    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    }
    return (
        <div className='formInput'>
            <label htmlFor="">{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}
