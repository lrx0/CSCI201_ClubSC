import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResultsPage from './ResultsPage';
import Route from '../components/Route';
import ContainerView from '../components/ContainerView';
import SearchBar from '../components/SearchBar';

const LandingPage = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.post("http://localhost:8080/app/clubsearch", { key: term });

      setResults(data);
    }

    search();
  }, [term]);

  const queryResults = (event) => {
    event.preventDefault();
    window.history.pushState({}, '', '/search');

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

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
              <Route path="/search">
                <ResultsPage results={results}/>
              </Route>
            </div>
            <button className="btn btn-light mt-5" type="submit">Search Clubs</button>
          </div>
        </form>
      </div>
    </ContainerView>
  );
};

export default LandingPage;
