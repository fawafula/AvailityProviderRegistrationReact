import React from 'react'

const ProviderReadRow = ({ provider, handleEditClick }) => {
  return (
    <tr>
      <td>{provider.firstName}</td>
      <td>{provider.lastName}</td>
      <td>{provider.npiNumber}</td>
      <td>{provider.businessAddress}</td>
      <td>{provider.phoneNumber}</td>
      <td>{provider.email}</td>
      <td>
        <button type='button' onClick={(event)=> handleEditClick(event, provider)}>Edit</button>
      </td>

  </tr>
  )
}

export default ProviderReadRow