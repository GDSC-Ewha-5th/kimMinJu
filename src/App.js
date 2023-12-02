import React from 'react';
import logo from './icon.jpeg';
import Profile from './components/Profile';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' style={{width: "200px"}}/>
      </header>
      <Profile></Profile>
    </div>
  );
}

export default App;
