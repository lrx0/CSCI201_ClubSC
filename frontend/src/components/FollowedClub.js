import  '../stylesheets/master.css';
import  '../stylesheets/SearchResult.css';
import React, { useState, useEffect } from 'react';
import Link from './Link';

const FollowedClub = (props) => {
  const [btnProps, setBtnProps] = useState({text: "Leave", style:"btn-primary"});

  return (
    <div className="col-12 col-md-5 col-xl-3">
      <div className="card mb-3 mb-xl-4 mx-1 mx-xl-1">
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title">{props.title}</h5>
          <button
            onClick={() => {
              if(btnProps['text'] === "Leave"){
                setBtnProps({text: "Join", style:"btn-outline-primary"});
              } else{
                setBtnProps({text: "Leave", style:"btn-primary"});
              }
            }}
            className={`btn ${btnProps['style']}`}
          >{btnProps['text']}</button>
        </div>
      </div>
    </div>
  );
};

export default FollowedClub;
