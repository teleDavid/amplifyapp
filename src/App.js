import React from 'react';
import logo from './logo.svg';
import './App.css';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

function App() {
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

      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />



      </header>
    </div>
  );
}



export default App;
