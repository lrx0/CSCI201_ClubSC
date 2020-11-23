import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import axios from 'axios';
import ContainerView from '../components/ContainerView';
import { authHeader } from '../App';

const ClubPage = ({  id, onTermChange, user }) => {
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    if(user && user.roles.includes('ROLE_CLUB')){
      window.history.pushState({}, '', '/');
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    }
  });

  useEffect(() => {
    const alreadyFollowed = async () => {
      const { data } = await axios.get("http://localhost:8080/app/clubsfollowed",
        { headers: authHeader() });

      for(let i = 0; i < data.length; i++){
        if(data[i].club_id === id){
          setFollowed(true);
          break;
        }
      }
    }

    alreadyFollowed();
  }, [id]);

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

  const follow = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/app/studentfollow",
      {
        club: id
      },
    { headers: authHeader() });

    setFollowed(true);
  }

  const renderedAnnouncements = info.announcements.map((a) => {
    return (
      <Post key={a.postid} timestamp={a.timestamp} red={true}>
        <p>{a.body}</p>
      </Post>
    );
  });

  return (
    <ContainerView search={true} user={user} onTermChange={onTermChange}>
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className ="d-flex flex-row justify-content-center align-items-center">
            <h1 className="mt-4">{info.club_name}</h1>
            {user ?
            <button onClick={follow} className="btn btn-primary ml-3 mt-3" disabled={followed}>
              {followed ?
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-check-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9.854-2.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              </svg>  :
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zM13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
              </svg>}
            </button> :
            null}
          </div>
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
