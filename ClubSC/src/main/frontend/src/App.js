import React, {useState} from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ResultsPage from './pages/ResultsPage';
import UserDashboard from './pages/UserDashboard';
import ClubDashboard from './pages/ClubDashboard';
import ClubPage from './pages/ClubPage';
import UserPage from './pages/UserPage';
import Route from './components/Route';

const App = () => {
  const [term, setTerm] = useState('');
  const [clubID, setClubID] = useState(null);

  return (
    <div>
      <Route path="/">
        <LandingPage onTermChange={setTerm}/>
      </Route>
      <Route path="/search">
        <ResultsPage onTermChange={setTerm} onClubSelect={setClubID} term={term}/>
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignupPage />
      </Route>
      <Route path="/userdash">
        <UserDashboard onTermChange={setTerm}/>
      </Route>
      <Route path="/user">
        <UserPage onTermChange={setTerm}/>
      </Route>
      <Route path="/clubdash">
        <ClubDashboard />
      </Route>
      <Route path="/club">
        <ClubPage onTermChange={setTerm} id={clubID}/>
      </Route>
    </div>
  );
}

export default App;
