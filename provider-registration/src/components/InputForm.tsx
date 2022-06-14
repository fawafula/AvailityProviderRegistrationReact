import React from 'react'

interface Props {

}

const InputForm = () => {
    return (
        <form action="submit">
            <input type="text" placeholder='First Name' className='input' />
            <input type="text" placeholder='Last Name' className='input' />
            <input type="text" placeholder='NPI Number' className='input' />
            <input type="address" placeholder='Business Address' className='input' />
            <input type="phone" placeholder='Phone Number' className='input' />
            <input type="email" placeholder='Email Address' className='input' />
            <button type='submit' className=''>Submit</button>
        </form>
    )
}

export default InputForm