/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, Fragment } from "react";
import { nanoid } from 'nanoid';
import './App.css';
import data from "./mock-data.json";
import ProviderReadRow from "./components/ProviderReadRow";
import ProviderEditRow from "./components/ProviderEditRow";

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

  const [editProviderId, setEditProviderId] = useState(null);

  const handleDataChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);

  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newProvider = {
      id: nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      npiNumber: addFormData.npiNumber,
      businessAddress: addFormData.businessAddress,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    }

    const newProviders = [...providers, newProvider];
    setProviders(newProviders);
  };

  const handleEditClick = (event, provider) => {
      event.preventDefault();
      setEditProviderId(provider.id);

  };

  return (
    <div className="App">
      <form>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>NPI Number</th>
            <th>Business Address</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {providers.map((provider) => (
            <Fragment>
              {editProviderId === provider.id ? (<ProviderEditRow/>) :  (<ProviderReadRow provider={provider} handleEditClick={handleEditClick}/>)}
               
             
            </Fragment> 
          ))}
          
        </tbody>
      </table>
      </form>
      
      <h2>Register Provider</h2>
      <form onSubmit={handleFormSubmit}>
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
