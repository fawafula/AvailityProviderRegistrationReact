/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import './App.css';
import data from "./mock-data.json";

const App = () => {

  const [providers, setProviders] = useState(data);

  const [addFormData, setAddFormData] = useState({
    firstName: '',
    lastName: '',
    npiNumber: '',
    businessAddress: '',
    phoneNumber: '',
    email: ''
  });

  const handleDataChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);

  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>NPI Number</th>
            <th>Business Address</th>
            <th>Phone Number</th>
            <th>Email Address</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
              <tr>
              <td>{provider.firstName}</td>
              <td>{provider.lastName}</td>
              <td>{provider.npiNumber}</td>
              <td>{provider.businessAddress}</td>
              <td>{provider.phoneNumber}</td>
              <td>{provider.email}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
      
      <h2>Register Provider</h2>
      <form>
        <input type= "text" name="firstName" required="required" placeholder="First Name" onChange={handleDataChange}/>
        <input type= "text" name="lastName" required="required" placeholder="Last Name" onChange={handleDataChange}/>
        <input type= "text" name="npiNumber" required="required" placeholder="NPI Number" onChange={handleDataChange}/>
        <input type= "address" name="businessAddress" required="required" placeholder="Business Address" onChange={handleDataChange}/>
        <input type= "phone" name="phoneNumber" required="required" placeholder="Phone Number" onChange={handleDataChange}/>
        <input type= "email" name="email" required="required" placeholder="Email" onChange={handleDataChange}/>
        <button type="submit">Submit</button>
      </form>
    
    </div>
  );
}

export default App;
