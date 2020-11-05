import React from "react"; 
import './App.css';
import SearchBar from './SearchBar'; 
import CircleButton from './CircleButton'; 
import logo from "./artifacts/logo.svg"; 
import clubLoginLogo from "./artifacts/clubLogin.svg"; 
import studentLoginLogo from "./artifacts/studentLogin.svg"; 
import { View } from 'react-native';

class App extends React.Component {

  handleClubClick() {
    console.log("Club is Being Logged In!"); 
  }
  
  handleStudentClick() {
    console.log("Student is Being Logged In!"); 
  }

  render() {
    return (
      <div className="app center">
        <img src={logo} alt="ClubSCLogo" className="center centered" id="jumbo-logo"/> 
        <div className="center" id="search">
          <SearchBar/>
        </div>
        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
          <CircleButton onPress={this.handleClubClick}> <img src={clubLoginLogo} alt="ClubLoginLogo" height="130px" className="club-login-padding"/> </CircleButton>
          <CircleButton onPress={this.handleStudentClick}> <img src={studentLoginLogo} alt="StudentLoginLogo"  height="130px" className="student-login-padding"/> </CircleButton>
        </View>
      </div>
    ); 
  }
}


export default App;
