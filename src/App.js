import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Telecomstack</h1>
        <p>
          Working Prototype
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a>

        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>


      </header>
    </div>
  );
}

export default App;
