import './master.css'
import './ContainerView.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import Navbar from './Navbar';

const ContainerView = (props) => {
  return (
    <div className = "page-contents" >
      <Navbar
        search = {props.search}
        user = {props.user}
        logoOnly = {props.logoOnly}
      />
      {props.children}
      <footer className = {`${props.logoOnly ? 'hide' : ''}`}>
        <div className = "navbar navbar-light bg-light flex-column responsive-footer justify-content-center">
          <div>
            <p className = "mb-0">©clubSC 2020</p>
          </div>
          <div className = "navbar-nav d-flex flex-row justify-content-around">
            <a className = "nav-item nav-link mr-1" href = "#">Privacy</a>
            <a className = "nav-item nav-link ml-1 mr-sm-3" href = "#" >Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

ContainerView.defaultProps = {
  search: false,
  user: {
    name: '',
    img: ''
  },
  logoOnly: false
};

export default ContainerView;
