import React from 'react'

const ProviderReadRow = ({ provider, handleEditClick, handleDeleteClick }) => {
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
        <button type="button" onClick={() => handleDeleteClick(provider.id)}>Delete</button>
      </td>

  </tr>
  )
}

export default ProviderReadRow