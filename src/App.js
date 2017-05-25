import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// function studyEs6(){
//   alert('studyEs6');
// }
{
  var a =3;
}
alert(a);
class App extends Component {
  render() {
   // studyEs6();
    return (
      <div className="App">
      你好！
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
