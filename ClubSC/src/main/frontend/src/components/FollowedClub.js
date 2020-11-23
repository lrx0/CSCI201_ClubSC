import  '../stylesheets/master.css';
import  '../stylesheets/SearchResult.css';
import React, { useState, useEffect } from 'react';
import Link from './Link';

const FollowedClub = ({ name, id, onClubSelect }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', `/club?${id}`);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <div className="col-12 col-md-5 col-xl-3">
      <div className="card mb-3 mb-xl-4 mx-1 mx-xl-1">
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title">{name}</h5>
          <a
            onClick={(e) => { onClubSelect(id); onClick(e); } }
            href={`/club?${id}`}
            className="btn btn-primary"
          >Club Page</a>
        </div>
      </div>
    </div>
  );
};

export default FollowedClub;
