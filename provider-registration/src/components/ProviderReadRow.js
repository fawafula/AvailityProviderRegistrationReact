import React from 'react'

const ProviderReadRow = ({ provider }) => {
  return (
    <tr>
      <td>{provider.firstName}</td>
      <td>{provider.lastName}</td>
      <td>{provider.npiNumber}</td>
      <td>{provider.businessAddress}</td>
      <td>{provider.phoneNumber}</td>
      <td>{provider.email}</td>
  </tr>
  )
}

export default ProviderReadRow