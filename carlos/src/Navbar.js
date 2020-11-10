import './master.css';
import './ContainerView.css'
import React from 'react';
import SearchBar from './SearchBar';

const populateNavLeft = (search) => {
  if (!search){
    return(
      <div className="navbar-nav">
        <a className="nav-item nav-link" href="#">About ClubSC</a>
        <a className="nav-item nav-link" href="#">Meet the Team</a>
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

const populateNavRight = (user) => {
  if (!user['name']){
    return(
      <form className="form-inline ml-auto">
        <a className="btn btn-outline-primary" href="#">
          <span className="hide-mobile">Sign In</span>
          <span className="show-mobile">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
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
      {populateNavLeft(props.search)}
      {populateNavRight(props.user)}
    </nav>
  );
};

export default Navbar;
