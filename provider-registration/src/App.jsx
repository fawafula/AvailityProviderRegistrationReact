import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import { FormInput } from './components/FormInput';

const App = () => {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    npiNumber: "",
    businessAddress: "",
    phoneNumber: "",
    emailAddress: ""
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage: "Only letters allowed.",
      label: "First Name"
    },
    {
      id: 2,
      name: "lasttName",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Only letters allowed",
      label: "Last Name"
    },
    {
      id: 3,
      name: "npiNumber",
      type: "text",
      placeholder: "NPI Number",
      errorMessage: "Enter a valid NPI number",
      label: "NPI Number"
    },
    {
      id: 4,
      name: "businessAddress",
      type: "address",
      placeholder: "Business Address",
      errorMessage: "Enter a valid address",
      label: "Bussiness Address"
    },
    {
      id: 5,
      name: "phoneNumber",
      type: "phone",
      placeholder: "Phone Number",
      errorMessage: "Enter a valid phone number.",
      label: "Phone Number"
    },
    {
      id: 6,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Enter a valid email address.",
      label: "Email"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Provider Registration</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
