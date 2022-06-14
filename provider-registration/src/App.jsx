import './App.css';
import { FormInput } from './components/FormInput';

function App() {
  return (
    <div className="App">
      <form action=""></form>
      <FormInput placeholder="First Name" />
      <FormInput placeholder="Last Name" />
      <FormInput placeholder="NPI Number" />
      <FormInput placeholder="business Address" />
      <FormInput placeholder="Phone Number" />
      <FormInput placeholder="Email Address" />

    </div>
  );
}
export default App;
