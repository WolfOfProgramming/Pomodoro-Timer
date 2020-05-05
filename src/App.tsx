import React from 'react';
import Header from './header/Header';
import Pomodoro from './pomodoro/Pomodoro';
import Settings from './settings/Settings';

function App() {
  return (
    <div className='App'>
      <Header />
      <Pomodoro />
      <Settings />
    </div>
  );
}

export default App;
