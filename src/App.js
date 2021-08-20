import React from 'react';
import './App.css';
import Profile from './profile/profile';

function App() {
  return (
    <React.Fragment>
      <Profile fullname="Hannachi Mouadh"></Profile>
      <Profile bio="Entrepreneur"></Profile>
      <Profile profession="Developper"></Profile>
      <Profile></Profile>
    </React.Fragment>
  );
}

export default App;
