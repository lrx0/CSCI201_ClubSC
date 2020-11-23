import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import ContainerView from '../components/ContainerView';
import axios from 'axios';
import { authHeader } from '../App';

const UserDashboard = ({ onTermChange, user }) => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    if(!user || user.roles.includes('ROLE_CLUB')){
      window.history.pushState({}, '', '/');
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    }
  });

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("http://localhost:8080/app/studentfeed",
        { headers: authHeader() });

      setAnnouncements(data);
    }

    search();
  }, []);



  const renderedAnnouncements = announcements.map((a) => {
    return (
      <Post club={a.username} key={a.postid} timestamp={a.timestamp}>
        <p>{a.body}</p>
      </Post>
    );
  });

  return (
    <ContainerView search={true} onTermChange={onTermChange} user={user}>
      <div className="container">
        {renderedAnnouncements}
      </div>
    </ContainerView>
  );
};

export default UserDashboard;
