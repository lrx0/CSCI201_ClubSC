import React from 'react';
import ReactDOM from 'react-dom';
import SearchResult from './SearchResult';
import ResultContainer from './ResultContainer';
import SearchBar from './SearchBar';
import LoginBtn from './LoginBtn';

const App = () => {
  return (
    <div class="container centered">
      <div class="d-flex flex-row justify-content-center my-5">
        <img src="logo.png" alt="clubSC" id="jumbo-logo" />
      </div>
      <SearchBar size='8' />
      <div class="d-flex flex-row justify-content-center my-5">
        <LoginBtn type="club" />
        <LoginBtn type="student" />
      </div>
    </div>
  );
};

const ResultsPage = () => {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-around align-items-center py-4">
        <LoginBtn type="club" />
        <img src="logo.png" alt="clubSC" id="std-logo" />
        <LoginBtn type="student" />
      </div>
      <SearchBar size='6' />
      <ResultContainer>
        <SearchResult text="Code the Change" />
        <SearchResult text="LACI" />
        <SearchResult text="Scope" />
        <SearchResult text="Novus Think Tank" />
        <SearchResult text="AIM" />
        <SearchResult text="BreakThrough Hip Hop" />
        <SearchResult text="Troy Phi" />
        <SearchResult text="QuASA" />
        <SearchResult text="Environmental Student Assembly" />
        <SearchResult text="CASA" />
        <SearchResult text="CAIS++" />
      </ResultContainer>
    </div>
  );
};

//uncomment to render landing page
ReactDOM.render(<App />, document.querySelector('#root'))

//uncomment to render results page
// ReactDOM.render(<ResultsPage />, document.querySelector('#root'))
