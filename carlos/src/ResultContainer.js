import './master.css';
import React from 'react';

const ResultContainer = (props) => {
  let retval = [];
  let len = props.children.length;

  for(let i = 0; i < len; i += 4){
    let cols = [];
    for(let j = i; j < (i+4 < len ? i+4 : len); j++){
      cols.push(props.children[j])
    }
    retval.push(
      <div className="row d-flex flex-row justify-content-xl-start justify-content-sm-center justify-content-between" key={i}>
        {cols}
      </div>
    );
  }

  return (
    <React.Fragment>
      {retval}
    </React.Fragment>
  );
};

export default ResultContainer;
