import React from 'react';
import ContainerView from '../components/ContainerView';
import SearchBar from '../components/SearchBar';

const LandingPage = ({ onTermChange }) => {

  return (
    <ContainerView>
      <div className="container">
        <div className="row d-flex flex-row justify-content-center">
          <img className="my-5" width="225px" height="150px" src="clubsc_big.png" />
        </div>
        <div className="row d-flex flex-column align-items-center">
          <div className="col-8">
            <SearchBar onTermChange={onTermChange}/>
          </div>
          <button className="btn btn-light mt-5" type="submit" form="search-bar">Search Clubs</button>
        </div>
      </div>
    </ContainerView>
  );
};

export default LandingPage;
