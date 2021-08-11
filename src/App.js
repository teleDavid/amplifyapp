import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    $.ajax({
      type: 'POST',
      url: '	email-smtp.eu-west-1.amazonaws.com',
      data: {
        'key': 'AKIAVX27EFOE4IHYA7WW',
        'message': {
          'from_email': 't3styt3st3rt0n@gmail.com',
          'to': [
              {
                'email': 'david@telecomstack.com',
                'name': 'David',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'Test',
          'html': 'AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'
        }
      }
     }).done(function(response) {
       console.log(response); // if you're into that sorta thing
     });
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
          <button type="submit">Submit</button>
          <button type="submit">Submit</button>
          <button type="submit">Submit</button>
        </form>


      </header>
    </div>
  );
}

export default App;
