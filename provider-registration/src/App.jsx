import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import { FormInput } from './components/FormInput';

const App = () => {

  // const [firstName, setFirstName] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput name="firstName" placeholder="First Name" />
        <FormInput name="lastName" placeholder="Last Name" />
        <FormInput name="npiNumber" placeholder="NPI Number" />
        <FormInput name="buisnessAddress" placeholder="Business Address" />
        <FormInput name="phoneNumber" placeholder="Phone Number" />
        <FormInput name="emailAddress" placeholder="Email Address" />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
