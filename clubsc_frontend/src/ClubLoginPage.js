import React from "react";
import logo from "./artifacts/logo.svg"; 
import './ClubLoginPage.css'; 

class ClubLoginPage extends React.Component {
	loginForm() {
		return (
			<form>
				<div id="email-login">
					<input type="text" placeholder="Email"/> 
				</div>
				<div id="password-login" className="password-login-padding">
					<input type="text" placeholder="Password"/> 
				</div>
				<div id="submit-button" className="submit-button-padding">
					<button>Submit</button> 
				</div>
			</form>
		); 
	}

	render() {
		return (
			<div className="center">
				<img src={logo} alt="ClubSCLogo" className="center centered" id="jumbo-logo"/> 
				<this.loginForm/> 
			</div>
		);
	}
}

export default ClubLoginPage

