import './master.css';
import './ContainerView.css'
import React from 'react';
import SearchBar from './SearchBar';

const populateNavLeft = (search, logoOnly) => {
  if (logoOnly) {
    return (
      <div className="navbar-nav">
        <a className="navbar-brand ml-2" href="#">
          <img src="clubsc_mini.png" width="72px" height="40px" alt="" />
        </a>
      </div>
    );
  }
  if (!search){
    return(
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#">About</a>
        <a className="nav-item nav-link" href="#">Dev Team</a>
      </div>
    );
  } else{
    return(
      <div className="navbar-nav">
        <a className="navbar-brand ml-2" href="#">
          <img src="clubsc_mini.png" width="72px" height="40px" alt="" />
        </a>
        <form className="form-inline d-flex">
          <SearchBar width='50vw' button={true}/>
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
        <a className="btn btn-outline-primary" href="#">
          <span className="hide-mobile">Sign In</span>
          <span className="show-mobile">
          <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>
          </span>
        </a>
      </form>
    );
  } else {
    return (
      <div className="navbar-nav ml-auto">
        <a className="nav-item nav-link align-items-center" href="#">
          <span className="hide-mobile" style={ {lineHeight:'40px' }} >{user['name']} </span>
          <img alt="avatar" src={user['img']} className="avatar ml-2" />
        </a>
      </div>
    );
  }
};

const Navbar = (props) => {
  return (
    <nav className="navbar sticky-top navbar-expand navbar-light bg-light">
      {populateNavLeft(props.search, props.logoOnly)}
      {populateNavRight(props.user, props.logoOnly)}
    </nav>
  );
};

export default Navbar;
