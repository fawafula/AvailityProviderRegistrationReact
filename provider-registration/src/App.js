import './App.css';

const App = () => {
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
          <tr>
            <td>Jon</td>
            <td>Doe</td>
            <td>123456789</td>
            <td>123 Main St. Denver CO</td>
            <td>123-456-2345</td>
            <td>doe.jon@somemail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
