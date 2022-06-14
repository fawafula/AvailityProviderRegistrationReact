import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';

const App: React.FC = () => {

  return (
    <div className="App">
      <span className='heading'>Availity Registration</span>
      <div>
        <h2>
          Welcome to Availity Provider Registration
        </h2>
      </div>
      <div>
        <InputForm />
      </div>
    </div>
  );
}

export default App;
