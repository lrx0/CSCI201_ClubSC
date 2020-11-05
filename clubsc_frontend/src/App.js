import React from "react"; 
import './App.css';
import SearchBar from './SearchBar'; 
import logo from "./artifacts/logo.svg"; 

class App extends React.Component {
  render() {
    return (
      <div className="app body center">
        <img src={logo} alt="ClubSCLogo" className="center centered" id="jumbo-logo"/> 
        <SearchBar className="search-from"/>
      </div>
    ); 
  }
}

export default App;
