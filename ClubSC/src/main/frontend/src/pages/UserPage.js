import React, { useEffect } from 'react';
import ContainerView from '../components/ContainerView';
import ResultContainer from '../components/ResultContainer';
import FollowedClub from '../components/FollowedClub';

const UserPage = ({ onTermChange, user, setUser }) => {

  useEffect(() => {
    if(!user){
      window.history.pushState({}, '', '/');
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    }
  })

  const name = user.username;

  const logout = (event) => {
    localStorage.removeItem('user');
    setUser(JSON.parse(localStorage.getItem('user')));

    event.preventDefault();
    window.history.pushState({}, '', '/');

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <ContainerView search={true} user={user} onTermChange={onTermChange}>
      <div className="container">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h1 className="mt-4">{name}</h1>
          <button className="btn btn-secondary" onClick={logout}>Log Out</button>
        </div>
        <hr />
        <ResultContainer>
          <FollowedClub title="Scope"/>
          <FollowedClub title="Scope"/>
          <FollowedClub title="Scope"/>
          <FollowedClub title="Scope"/>
          <FollowedClub title="Scope"/>
          <FollowedClub title="Scope"/>
          <FollowedClub title="Scope"/>
          <FollowedClub title="Scope"/>
          <FollowedClub title="Scope"/>
          <FollowedClub title="Scope"/>
          <FollowedClub title="Scope"/>
          <FollowedClub title="Scope"/>
        </ResultContainer>
      </div>
    </ContainerView>
  );
};

export default UserPage;
