import  '../stylesheets/master.css';
import  '../stylesheets/ContainerView.css'
import React from 'react';
import SearchBar from './SearchBar';
import Link from './Link';

const Navbar = ({ search, logoOnly, user, setUser, onTermChange }) => {
  const logout = (event) => {
    localStorage.removeItem('user');
    setUser(JSON.parse(localStorage.getItem('user')));

    event.preventDefault();
    window.history.pushState({}, '', '/');

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  const populateNavLeft = () => {
    const logoLink = '/';

    if (logoOnly) {
      return (
        <div className="navbar-nav">
          <Link className="navbar-brand ml-2" href={logoLink}>
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
          <Link className="navbar-brand ml-2" href={logoLink}>
            <img src="clubsc_mini.png" width="72px" height="40px" alt="" />
          </Link>
          <SearchBar width='50vw' button={true} onTermChange={onTermChange} />
        </div>
      );
    }
  };

  const populateNavRight = () => {
    if(logoOnly && (!user || user.roles.includes('ROLE_STUDENT'))) { return; }

    if (!user){
      return(
        <form className="form-inline ml-auto">
          <Link className="btn btn-outline-primary" href="/login">
            <span className="hide-mobile">Sign In</span>
            <span className="show-mobile">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-box-arrow-in-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
            </span>
          </Link>
        </form>
      );
    }
    else if (user.roles.includes('ROLE_STUDENT')) {
      return (
        <div className="navbar-nav ml-auto">
          <Link className="nav-item nav-link align-items-center" href={window.location.pathname === '/userdash' ? '/user' : '/userdash'}>
            {user.username}
          </Link>
        </div>
      );
    }
    else {
      return (
        <React.Fragment>
          { window.location.pathname === '/' ?
          <div className="navbar-nav ml-auto">
            <Link className="nav-item nav-link align-items-center" href='/clubdash'>
              {user.username}
            </Link>
          </div> :
          <form className="form-inline ml-auto">
            <button className="btn btn-outline-primary" onClick={logout}>
              <span className="hide-mobile">Log Out</span>
              <span className="show-mobile">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-box-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                </svg>
              </span>
            </button>
          </form>}
        </React.Fragment>
      );
    }
  };

  return (
    <nav className="navbar sticky-top navbar-expand navbar-light bg-light">
      {populateNavLeft()}
      {populateNavRight()}
    </nav>
  );
};

export default Navbar;
