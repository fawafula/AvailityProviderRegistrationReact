import React from 'react'
import "./formInput.css";

export const FormInput = (props) => {
    const { label, onChange, id, ...inputProps } = props;
    return (
        <div className='formInput'>
            <label htmlFor="">{label}</label>
            <input {...inputProps} onChange={onChange} />
        </div>
    )
}
