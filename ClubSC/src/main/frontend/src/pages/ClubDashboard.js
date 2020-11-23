import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../components/Post';
import InputArea from '../components/InputArea';
import ContainerView from '../components/ContainerView';
import { authHeader } from '../App';

const ClubDashboard = ({ user, setUser }) => {
  const [ name, setName ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ announcements, setAnnouncements ] = useState([]);
  const [ postText, setPostText ] = useState([]);

  useEffect(() => {
    if(!user || user.roles.includes('ROLE_STUDENT')){
      window.history.pushState({}, '', '/');
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    }
  });

  useEffect(() => {
    const getClubInfo = async () => {
      const { data } = await axios.post("http://localhost:8080/app/clubpage",
        {
          key: user.id
        }
      );

      setName(data.club_name);
      setDescription(data.club_desc);
      setAnnouncements(data.announcements);
    }

    getClubInfo();
  }, []);

  const makePost = async (e) => {
    e.preventDefault();

    if(postText.length < 20) { return; }

    axios.post("http://localhost:8080/app/clubpost",
      {
        content: postText
      },
      { headers: authHeader() });

    setPostText('');

    const { data: {announcements} } = await axios.post("http://localhost:8080/app/clubpage",
      {
        key: user.id
      }
    );

    setAnnouncements(announcements);
  }

  const renderedAnnouncements = announcements.map((a) => {
    return (
      <Post key={a.postid} timestamp={a.timestamp} red={true}>
        <p>{a.body}</p>
      </Post>
    );
  });

  return (
    <ContainerView logoOnly={true} user={user} setUser={setUser}>
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="mt-4">{name}</h1>
          <p>{description}</p>
        </div>
        <hr />
        <Post club="Club Name" red={true}>
          <form onSubmit={makePost}>
            <div className="d-flex flex-column justify-content-center align-items-fill">
              <InputArea placeholder="Make a new post" value={postText} onChange={setPostText} className="mb-0 mt-2"/>
              <button className="btn btn-secondary mt-0 mb-4">Post</button>
            </div>
          </form>
        </Post>
        {renderedAnnouncements}
      </div>
    </ContainerView>
  );
};

export default ClubDashboard;
