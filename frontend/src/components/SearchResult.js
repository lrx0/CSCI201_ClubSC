import  '../stylesheets/master.css';
import  '../stylesheets/SearchResult.css';
import React from 'react';
import Link from './Link';

const SearchResult = (props) => {


  return (
    <div className="col-12 col-md-5 col-xl-3">
      <div className="card mb-3 mb-xl-4 mx-1 mx-xl-1">
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <Link href="/club" className="btn btn-primary">Club Page</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
