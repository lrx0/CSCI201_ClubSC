import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import Navbar from './Navbar';

// <Navbar user={{ name: "Charles Maxwell", img: Faker.image.avatar() }}/>

const ContainerView = (props) => {
  return (
    <React.Fragment>
      <Navbar search={props.search} user={props.user} />
        {props.children}
      <footer>
        <div className="navbar navbar-light bg-light flex-column responsive-footer justify-content-center">
          <div>
            <p className="mb-0">© clubSC 2020</p>
          </div>
          <div className="navbar-nav d-flex flex-row justify-content-around">
            <a className="nav-item nav-link mr-1" href="#">Privacy Policy</a>
            <a className="nav-item nav-link ml-1" href="#">Terms and Conditions</a>
          </div>
        </div>
      </footer>
    </React.Fragment  >
  );
};

ContainerView.defaultProps = {
  search: false,
  user: {
    name: '',
    img: ''
  }
};

export default ContainerView;
