import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContainerView from '../components/ContainerView';
import ResultContainer from '../components/ResultContainer';
import FollowedClub from '../components/FollowedClub';
import { authHeader } from '../App';

const UserPage = ({ onTermChange, user, setUser, onClubSelect }) => {
  const [followed, setFollowed] = useState([]);

  useEffect(() => {
    if(!user || user.roles.includes('ROLE_CLUB')){
      window.history.pushState({}, '', '/');
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    }
  });

  useEffect(() => {
    axios.get("http://localhost:8080/app/clubsfollowed",
    { headers: authHeader() }).then(({ data }) => {
      setFollowed(data)
    });
  }, [user]);

  const name = user.username;

  const logout = (event) => {
    localStorage.removeItem('user');
    setUser(JSON.parse(localStorage.getItem('user')));

    event.preventDefault();
    window.history.pushState({}, '', '/');

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  const renderedClubs = followed.map((club) => {
    return (
      <FollowedClub
        onClubSelect={onClubSelect}
        name={club.username}
        key={club.club_id}
        id={club.club_id}
      />
    );
  });

  return (
    <ContainerView search={true} user={user} onTermChange={onTermChange}>
      <div className="container">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h1 className="mt-4">{name}</h1>
          <button className="btn btn-secondary" onClick={logout}>Log Out</button>
        </div>
        <hr />
        <ResultContainer>
          {renderedClubs}
        </ResultContainer>
      </div>
    </ContainerView>
  );
};

export default UserPage;
