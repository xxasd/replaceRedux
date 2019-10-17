import React from 'react';
import Switch from './pages/switch'
import State from './pages/state'
import { Theme } from './store/theme'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Theme>
        <Switch></Switch>
        <State></State>
      </Theme>
    </div>
  );
}

export default App;
