import './master.css';
import './SearchResult.css'
import React from 'react';

// const SearchResult = (props) => {
//   return (
//     <div className="result d-flex flex-row justify-content-around align-items-center">
//       <div className="mr-3">
//         <img className="club-icon" src={props.img} />
//       </div>
//       <div>
//         <a className="club-name">{props.title}</a>
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
        <img src={props.img} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-secondary">Club Page</a>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
