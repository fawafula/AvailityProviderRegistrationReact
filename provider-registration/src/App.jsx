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
      label: "First Name"
    },
    {
      id: 2,
      name: "lasttName",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name"
    },
    {
      id: 3,
      name: "npiNumber",
      type: "text",
      placeholder: "NPI Number",
      label: "NPI Number"
    },
    {
      id: 4,
      name: "businessAddress",
      type: "address",
      placeholder: "Business Address",
      label: "Bussiness Address"
    },
    {
      id: 5,
      name: "phoneNumber",
      type: "phone",
      placeholder: "Phone Number",
      label: "Phone Number"
    },
    {
      id: 6,
      name: "email",
      type: "email",
      placeholder: "Email",
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
