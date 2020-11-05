import React from "react"; 
import './App.css';
import SearchBar from './SearchBar'; 
import logo from "./artifacts/logo.svg"; 
import clubLoginLogo from "./artifacts/clubLogin.svg"; 
import studentLoginLogo from "./artifacts/studentLogin.svg"; 

class App extends React.Component {
  handleClubClick() {
    console.log("Club is Being Logged In!"); 
  }
  
  handleStudentClick() {
    console.log("Student is Being Logged In!"); 
  }

  render() {
    return (
      <div className="app body center">
        <img src={logo} alt="ClubSCLogo" className="center centered" id="jumbo-logo"/> 
        <div className="center" id="search">
          <SearchBar/>
        </div>
        <div className="center" id="login-buttons">
          <img src={clubLoginLogo} alt="ClubLoginLogo" className="login-button-padding" height="130px" onClick={this.handleClubClick}/>
          <img src={studentLoginLogo} alt="StudentLoginLogo"  height="130px" onClick={this.handleStudentClick}/>
        </div>
      </div>
    ); 
  }
}


export default App;
