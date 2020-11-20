import  '../stylesheets/master.css';
import  '../stylesheets/ContainerView.css'
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Link from './Link';

const Navbar = (props) => {
  const [term, setTerm] = useState('');

  const queryResults = (event) => {
    console.log(`Searching for ${term}...`)

    event.preventDefault();
    window.history.pushState({}, '', '/clubsc/search');

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  const populateNavLeft = (search, logoOnly) => {
    if (logoOnly) {
      return (
        <div className="navbar-nav">
          <Link className="navbar-brand ml-2" href="/">
            <img src="clubsc_mini.png" width="72px" height="40px" alt="" />
          </Link>
        </div>
      );
    }
    if (!search){
      return(
        <div className="navbar-nav">
          <Link className="nav-item nav-link" href="/">About</Link>
          <Link className="nav-item nav-link" href="/">Dev Team</Link>
        </div>
      );
    } else{
      return(
        <div className="navbar-nav">
          <Link className="navbar-brand ml-2" href="/">
            <img src="clubsc_mini.png" width="72px" height="40px" alt="" />
          </Link>
          <form className="form-inline d-flex" onSubmit={queryResults}>
            <SearchBar width='50vw' button={true} term={term} onTermChange={setTerm}/>
          </form>
        </div>
      );
    }
  };

  const populateNavRight = (user, logoOnly) => {
    if(logoOnly) { return; }

    if (!user['name']){
      return(
        <form className="form-inline ml-auto">
          <Link className="btn btn-outline-primary" href="/login">
            <span className="hide-mobile">Sign In</span>
            <span className="show-mobile">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
            </span>
          </Link>
        </form>
      );
    } else {
      return (
        <div className="navbar-nav ml-auto">
          <Link className="nav-item nav-link align-items-center" href="/user">
            <span className="hide-mobile" style={ {lineHeight:'40px' }} >{user['name']} </span>
            <img alt="avatar" src={user['img']} className="avatar ml-2" />
          </Link>
        </div>
      );
    }
  };

  return (
    <nav className="navbar sticky-top navbar-expand navbar-light bg-light">
      {populateNavLeft(props.search, props.logoOnly)}
      {populateNavRight(props.user, props.logoOnly)}
    </nav>
  );
};

export default Navbar;
