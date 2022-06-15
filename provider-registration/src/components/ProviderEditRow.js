import React from 'react'
import "./tableRow.css"

const ProviderEditRow = ({editFormData, handleDataEditChange, handleCancelClick}) => {
  return (
    <tr className='tableRow'>
        <td>
            <input className="input" type="text" name="firstName" value={editFormData.firstName} required="required" placeholder="First Name" onChange={handleDataEditChange}/>
        </td>
        <td>
            <input className="input" type="text" name="lastName" value={editFormData.lastName} required="required" placeholder="Last Name" onChange={handleDataEditChange}/>
        </td>
        <td>
            <input className="input" type="text" name="npiNumber" value={editFormData.npiNumber} required="required" placeholder="NPI Number" onChange={handleDataEditChange}/>
        </td>
        <td>
            <input className="input" type="address" name="businessAddress" value={editFormData.businessAddress} required="required" placeholder="Business Address" onChange={handleDataEditChange}/>
        </td>
        <td>
            <input className="input" type="phone" name="phoneNumber" value={editFormData.phoneNumber} required="required" placeholder="Phone Number" onChange={handleDataEditChange}/>
        </td>
        <td>
            <input className="input" type="email" name="email" value={editFormData.email} required="required" placeholder="Email" onChange={handleDataEditChange}/>
        </td>
        <td>
            <button type="submit">Save</button>
            <button type='button' onClick={handleCancelClick}>Cancel</button>
        </td>
    </tr>
  )
}

export default ProviderEditRow