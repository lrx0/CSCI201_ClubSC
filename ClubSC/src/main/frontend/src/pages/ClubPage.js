import React, { useState, useEffect } from 'react';
import Faker from 'faker';
import Post from '../components/Post';
import axios from 'axios';
import ContainerView from '../components/ContainerView';

const ClubPage = ({  id, onTermChange }) => {
  const [info, setInfo] = useState({
    club_id: null,
    club_name: '',
    club_desc: '',
    announcements: []
  });

  useEffect(() => {
    const getClubInfo = async () => {
      const { data } = await axios.post("http://localhost:8080/app/clubpage",
        {
          key: id
        }
      );

      setInfo(data);
    }

    getClubInfo();
  }, [id]);

  const renderedAnnouncements = info.announcements.map((a) => {
    return (
      <Post key={a.postid} timestamp={a.timestamp} red={true}>
        {a.body}
      </Post>
    );
  });

  return (
    <ContainerView search={true} user={Faker.name.findName()} onTermChange={onTermChange}>
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="mt-4">{info.club_name}</h1>
          <p>{info.club_desc}</p>
        </div>
        <hr />
        {renderedAnnouncements}
      </div>
    </ContainerView>
  );
};

ClubPage.defaultProps = {
  id: window.location.search.slice(1, window.location.search.length)
}

export default ClubPage;
