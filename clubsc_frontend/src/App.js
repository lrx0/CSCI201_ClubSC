import React from "react"; 
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <img src={require("./clubSCLogo.png")} alt="website logo"/> 
      </div>
    ); 
  }
}

export default App;
