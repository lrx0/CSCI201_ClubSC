import './master.css';
import './SearchBar.css';
import React from 'react';

const populateSearchBar = (btn) => {
  if(!btn) {
    return (
      <React.Fragment>
        <span className="ml-0 mr-2">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
          </svg>
        </span>
        <input type="text" />
      </React.Fragment>
    );
  } else{
    return (
      <React.Fragment>
        <input className="ml-0" type="text" />
        <button className="btn btn-light mr-0" id="search-btn" type='Submit'>
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
          </svg>
        </button>
      </React.Fragment>
    );
  }
};

// TODO:
// Search bar not responsive on mobile devices (button disappears)
const SearchBar = (props) => {
  return (
    <div className="search-bar d-flex flex-row align-items-center pl-3 pr-2" style={{ width: props.width }} spellCheck="false flex-fill">
      {populateSearchBar(props.button)}
    </div>
  );
};

SearchBar.defaultProps = {
  width: 'auto',
  button: false
};

export default SearchBar;
