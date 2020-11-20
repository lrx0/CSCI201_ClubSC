import React from 'react';
import Faker from 'faker';
import Post from '../components/Post';
import ContainerView from '../components/ContainerView';
import ResultContainer from '../components/ResultContainer';
import FollowedClub from '../components/FollowedClub';

const UserPage = () => {
  const name = Faker.name.findName();

  return (
    <ContainerView search={true} user={name}>
      <div className="container">
        <div className="d-flex flex-row justify-content-center">
          <h1 className="mt-4">{name}</h1>
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
