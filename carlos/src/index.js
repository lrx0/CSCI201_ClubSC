import React from 'react';
import ReactDOM from 'react-dom';
import SearchResult from './SearchResult';
import ResultContainer from './ResultContainer';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-around align-items-center py-4">
        <a className="mx-5" id="login-club" href="#">Club Login</a>
        <img src="logo.png" alt="clubSC" id="std-logo" />
        <a className="mx-5" id="login-stu" href="#">Student Login</a>
      </div>
      <SearchBar />
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

ReactDOM.render(<App />, document.querySelector('#root'))
