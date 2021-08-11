import React from 'react';
import logo from './logo.svg';
import './App.css';
var AWS = require('aws-sdk');

/*var params = {
  MessageBody: 'Teststststtststststststststtststststststststststt',
  MessageAttributes: {
     attrName: {
        DataType: 'Binary',
        BinaryValue: 'example text'
     }
  }
};*/

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');

    /*AWS.config.getCredentials(function(err) {
      if (err) console.log(err.stack);
      // credentials not loaded
      else {
        console.log("Access key:", AWS.config.credentials.accessKeyId);
      }
    });*/
    /*$.ajax({

      
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
     });*/
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
