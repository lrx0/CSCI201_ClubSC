import './master.css';
import './SearchResult.css'
import React from 'react';

const SearchResult = (props) => {
  return (
    <div className="result d-flex flex-row justify-content-around align-items-center">
      <div className="mr-3">
        <img className="club-icon" src={props.img} />
      </div>
      <div>
        <a className="club-name">{props.title}</a>
        <p className="club-description">{props.text}</p>
      </div>
    </div>
  );
};

export default SearchResult;
