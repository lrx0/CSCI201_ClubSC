import './master.css';
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
        <a className="btn btn-outline-primary" href="#">Sign In</a>
      </form>
    );
  } else {
    return (
      <div className="navbar-nav ml-auto">
        <a className="nav-item nav-link align-items-center" href="#">
          <span style={ {lineHeight:'40px' }} >{user['name']} </span>
          <img alt="avatar" src={user['img']} className="avatar ml-2" />
        </a>
      </div>
    );
  }
};

const Navbar = (props) => {
  return (
    <nav class="navbar sticky-top navbar-expand navbar-light bg-light">
      {populateNavLeft(props.search)}
      {populateNavRight(props.user)}
    </nav>
  );
};

export default Navbar;
