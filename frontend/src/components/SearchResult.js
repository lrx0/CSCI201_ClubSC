import  '../stylesheets/master.css';
import  '../stylesheets/SearchResult.css';
import React from 'react';
import Link from './Link';

// const SearchResult = (props) => {
//   return (
//     <div className="result d-flex flex-row justify-content-around align-items-center">
//       <div className="mr-3">
//         <img className="club-icon" src={props.img} />
//       </div>
//       <div>
//         <Link className="club-name">{props.title}</Link>
//         <p className="club-description">{props.text}</p>
//       </div>
//     </div>
//   );
// };

// const renderText = (props.text) => {
//
// }

const SearchResult = (props) => {
  return (
    <div className="col-12 col-md-5 col-xl-3">
      <div className="card mb-3 mb-xl-4 mx-1 mx-xl-1">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <Link href="/club" className="btn btn-primary">Club Page</Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
