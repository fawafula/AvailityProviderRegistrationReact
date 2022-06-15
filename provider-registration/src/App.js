/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import './App.css';
import data from "./mock-data.json";

const App = () => {

  const [providers, setProviders] = useState(data);


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
    </div>
  );
}

export default App;
