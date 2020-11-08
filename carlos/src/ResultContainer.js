import './master.css'
import './ResultContainer.css';
import React from 'react';

const ResultContainer = (props) => {
  return (
    <div className="row d-flex flex-row justify-content-center mt-4">
      <div className="results d-flex flex-column align-items-stretch">
        {props.children}
      </div>
    </div>
  );
};

export default ResultContainer;
