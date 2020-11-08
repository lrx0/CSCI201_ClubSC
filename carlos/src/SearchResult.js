import './master.css';
import './SearchResult.css'
import React from 'react';

const SearchResult = (props) => {
  return (
    <div className="result my-2 p-3 d-flex align-items-center">
      <div className="fake-icon"></div>
      <div className="club-name pl-2">{props.text}</div>
    </div>
  );
};

export default SearchResult;
