import React from 'react';
import logo from './logo.svg';
import './App.css';

/*var params = {
  MessageBody: 'Teststststtststststststststtststststststststststt',
  MessageAttributes: {
     attrName: {
        DataType: 'Binary',
        BinaryValue: 'example text'
     }
  }
};*/
var AWS = require('aws-sdk/dist/aws-sdk-react-native');
AWS.config.region = 'eu-west-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'eu-west-1:ae7efa87-7e95-44b8-b95c-e8431db1c086',
});

var params = {
  Destination: { /* required */
    CcAddresses: [
      'EMAIL_ADDRESS',
      /* more items */
    ],
    ToAddresses: [
      'david@telecomstack.com',
      /* more items */
    ]
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
       Charset: "UTF-8",
       Data: "HTML_FORMAT_BODY"
      },
      Text: {
       Charset: "UTF-8",
       Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Test email'
     }
    },
  Source: 't3styt3st3rt0n@gmail.com', /* required */
  ReplyToAddresses: [
     'EMAIL_ADDRESS',
    /* more items */
  ],
};

var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();


function App() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');

    AWS.config.getCredentials(function(err) {
      if (err) console.log(err.stack);
      // credentials not loaded
      else {
        console.log("Access key:", AWS.config.credentials.accessKeyId);
      }
    });

    sendPromise.then(
      function(data) {
        console.log(data.MessageId);
      }).catch(
        function(err) {
        console.error(err, err.stack);
      });
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
