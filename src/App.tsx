import React from 'react';
import Switch from './pages/switch'
import State from './pages/state'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch></Switch>
      <State></State>
    </div>
  );
}

export default App;
