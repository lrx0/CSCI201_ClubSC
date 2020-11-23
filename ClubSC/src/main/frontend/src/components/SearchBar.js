import  '../stylesheets/master.css';
import  '../stylesheets/SearchBar.css';
import React, { useState } from 'react';
import SearchIcon from './SearchIcon';

const SearchBar = ({ button, width, onTermChange }) => {
  const [ tempTerm, setTempTerm ] = useState('');

  const generateResults = (event) => {
    event.preventDefault();
    onTermChange(tempTerm);

    if(window.location.pathname + window.location.search !== `/search?${tempTerm}`){
      window.history.pushState({}, '', `/search?${tempTerm}`);

      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    }
  };

  return (
    <form
      id='search-bar'
      onSubmit={generateResults}
      className={button ? "form-inline d-flex" : ''}
    >
      <div
        className="search-bar d-flex flex-row align-items-center pl-3 pr-2"
        style={{ width: width }}
        spellCheck="false flex-fill"
      >
        {button ? null : <span className="ml-0 mr-2"><SearchIcon /></span>}
        <input
          className={button ? "ml-0" : ''}
          type="text"
          value={tempTerm}
          onChange={e => { setTempTerm(e.target.value) } }
        />
        {button ? <button className="btn btn-light mr-0" id="search-btn" type='submit' form="search-bar"><SearchIcon /></button> : null}
      </div>
    </form>
  );
};

SearchBar.defaultProps = {
  width: 'auto',
  button: false
};

export default SearchBar;
