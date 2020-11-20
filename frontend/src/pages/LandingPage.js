import React, { useState } from 'react';
import ContainerView from '../components/ContainerView';
import SearchBar from '../components/SearchBar';

const LandingPage = () => {
  const [term, setTerm] = useState('');

  const queryResults = (event) => {
    console.log(`Searching for ${term}...`)

    event.preventDefault();
    window.history.pushState({}, '', '/ClubSC/search');

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <ContainerView>
      <div className="container">
        <div className="row d-flex flex-row justify-content-center">
          <img className="my-5" width="225px" height="150px" src="clubsc_big.png" />
        </div>
        <form onSubmit={queryResults}>
          <div className="row d-flex flex-column align-items-center">
            <div className="col-8">
              <SearchBar term={term} onTermChange={setTerm}/>
            </div>
            <button className="btn btn-light mt-5" type="submit">Search Clubs</button>
          </div>
        </form>
      </div>
    </ContainerView>
  );
};

export default LandingPage;
