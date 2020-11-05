import React from "react"; 
import './App.css';
import logo from "./artifacts/logo.svg"; 

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <img src={logo} alt="logo" id="jumbo-logo"/> 
      </div>
    ); 
  }
}

export default App;
