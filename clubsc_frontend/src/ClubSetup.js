import React from "react"; 
import './ClubSetup.css';  
//import { View } from 'react-native';

class ClubSetup extends React.Component{
    handleDoneClick(){
        console.log("Data is being saved");
    }

    render(){
        /*return(
            <div>
                <h1 style={{marginTop:"2rem", marginLeft:"22rem"}}>Welcome to ClubSC! Let's setup your profile!</h1>
                <hr align = "left" className="hLine" style={{color: "#000000", backgroundColor: "#000000", height: 2, width: "50rem", marginLeft:"21rem"}}/>
                
                <h2 style={{marginTop:"2rem", marginLeft:"23rem"}}>What is your club's name?</h2>
                <hr align = "left" className="hLine" style={{color: "#000000", backgroundColor: "#000000", height: 1, width: "22rem", marginLeft:"22.5rem"}}/>
                <input type="text" className="inputBar" placeholder="Enter name here..." 
                    style={{width:"45rem", height:"2rem", background: "#f0f0f0", border:"none", borderRadius: "10px", padding:"0.5rem", marginLeft:"23rem", marginTop:"1rem", marginBottom:"2rem"}} />
               
                <h2 style={{marginTop:"2rem", marginLeft:"23rem"}}>Enter a short description of your club:</h2>
                <hr align = "left" className="hLine" style={{color: "#000000", backgroundColor: "#000000", height: 1, width: "30rem", marginLeft:"22.5rem"}}/>
                <input type="text" className="inputBar" placeholder="Enter description here..." 
                    style={{width:"45rem", height:"2rem", background: "#f0f0f0", border:"none", borderRadius: "10px", padding:"0.5rem", marginLeft:"23rem", marginTop:"1rem", marginBottom:"2rem"}} />
                <h2> </h2>
                <button onPress={this.handleDoneClick} className="goButton" style={{marginLeft:"40rem", marginTop:"0.5rem", width:"10rem", height:"4rem", color: "#fab728", background: "#b50d1e", border:"none", borderRadius: "5px", padding: "0.5rem"}}>Done!</button>
            </div>
        );*/
        return(
            <div>
                <h1 style={{marginTop:"2rem", marginLeft:"22rem"}}>Welcome to ClubSC! Let's setup your profile!</h1>
                <hr align = "left" className="hLine" style={{color: "#000000", backgroundColor: "#000000", height: 2, width: "50rem", marginLeft:"21rem"}}/>
                
                <h2 style={{marginTop:"2rem", marginLeft:"23rem"}}>What is your club's name?</h2>
                <input type="text" className="inputBar" placeholder="Enter name here..." 
                    style={{width:"45rem", height:"2rem", background: "#f0f0f0", border:"none", borderRadius: "10px", padding:"0.5rem", marginLeft:"23rem", marginTop:"0rem", marginBottom:"2rem"}} />
               
                <h2 style={{marginTop:"2rem", marginLeft:"23rem"}}>Enter a short description of your club:</h2>
                <input type="text" className="inputBar" placeholder="Enter description here..." 
                    style={{width:"45rem", height:"2rem", background: "#f0f0f0", border:"none", borderRadius: "10px", padding:"0.5rem", marginLeft:"23rem", marginTop:"0rem", marginBottom:"2rem"}} />
                
                <h2> </h2>
                <button onPress={this.handleDoneClick} className="goButton" style={{marginLeft:"40rem", marginTop:"0.5rem", width:"10rem", height:"4rem", color: "#fab728", background: "#b50d1e", border:"none", borderRadius: "5px", padding: "0.5rem"}}>Done!</button>
            </div>
        );
    }
}



export default ClubSetup;