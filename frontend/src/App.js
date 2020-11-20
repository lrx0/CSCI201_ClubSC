import React from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ResultsPage from './pages/ResultsPage';
import UserHomepage from './pages/UserHomepage';
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
      <Route path="/userhome">
        <UserHomepage />
      </Route>
    </div>
  );
}

export default App;
