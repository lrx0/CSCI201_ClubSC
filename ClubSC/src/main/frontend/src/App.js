import React, { useState, useEffect } from 'react';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ResultsPage from './pages/ResultsPage';
import UserDashboard from './pages/UserDashboard';
import ClubDashboard from './pages/ClubDashboard';
import ClubPage from './pages/ClubPage';
import UserPage from './pages/UserPage';
import Route from './components/Route';

const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  } else {
    return {};
  }
}

const App = () => {
  const [term, setTerm] = useState('');
  const [clubID, setClubID] = useState(null);
  const [ user , setUser ] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <div>
      <Route path="/">
        <LandingPage user={user} onTermChange={setTerm}/>
      </Route>
      <Route path="/search">
        <ResultsPage user={user} onTermChange={setTerm} onClubSelect={setClubID} term={term ? term : undefined}/>
      </Route>
      <Route path="/login">
        <LoginPage setUser={setUser} />
      </Route>
      <Route path="/signup">
        <SignupPage setUser={setUser} />
      </Route>
      <Route path="/userdash">
        <UserDashboard user={user} onTermChange={setTerm}/>
      </Route>
      <Route path="/user">
        <UserPage user={user} setUser={setUser} onTermChange={setTerm} onClubSelect={setClubID}/>
      </Route>
      <Route path="/clubdash">
        <ClubDashboard user={user} setUser={setUser} />
      </Route>
      <Route path="/club">
        <ClubPage user={user}  onTermChange={setTerm} id={clubID ? clubID : undefined}/>
      </Route>
    </div>
  );
}

export { authHeader };

export default App;
