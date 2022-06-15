import React from 'react'

const ProviderEditRow = () => {
  return (
    <tr>
        <td>
            <input type="text" name="firstName" required="required" placeholder="First Name"/>
        </td>
        <td>
            <input type="text" name="lastName" required="required" placeholder="Last Name"/>
        </td>
        <td>
            <input type="text" name="npiNumber" required="required" placeholder="NPI Number"/>
        </td>
        <td>
            <input type="address" name="businessAddress" required="required" placeholder="Business Address"/>
        </td>
        <td>
            <input type="phone" name="phoneNumber" required="required" placeholder="Phone Number"/>
        </td>
        <td>
            <input type="email" name="email" required="required" placeholder="Email"/>
        </td>
    </tr>
  )
}

export default ProviderEditRow