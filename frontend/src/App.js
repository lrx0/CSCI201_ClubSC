import React from 'react';
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
  return (
    <div>
      <Route path="/">
        <LandingPage />
      </Route>
      <Route path="/search">
        <ResultsPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignupPage />
      </Route>
      <Route path="/userdash">
        <UserDashboard />
      </Route>
      <Route path="/user">
        <UserPage />
      </Route>
      <Route path="/clubdash">
        <ClubDashboard />
      </Route>
      <Route path="/club">
        <ClubPage />
      </Route>
    </div>
  );
}

export default App;
