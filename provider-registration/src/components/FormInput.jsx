import React from 'react'
import "./formInput.css";

export const FormInput = (props) => {
    return (
        <div className='formInput'>
            {/* <label htmlFor=""></label> */}
            <input name={props.name} placeholder={props.placeholder} />
        </div>
    )
}
