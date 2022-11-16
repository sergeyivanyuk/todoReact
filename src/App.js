import React from 'react';
import './App.scss';
import Input from './Components/input/input';
import Button from './Components/button/button';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className='header__title'>
        To Do App
        </h1>
      </header>
      <div className='inputs'>
        <Input></Input>
        <Button></Button>
      </div>
      <hr></hr>
    </div>
  );
}

export default App;
