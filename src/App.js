import React from 'react';
import './app.css';
import Description from './components/Description/Description';
import TrialButton from './components/TrialButton/TrialButton';
import InputForm from './components/InputForm/InputForm';

const App = () => ( 
    <div className="App">
      <Description />
      <TrialButton />
      <InputForm />
    </div>
);


export default App;
