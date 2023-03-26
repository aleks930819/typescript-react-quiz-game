import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import Game from './screens/Game';
import GameContextProvider from './context/GameContext';

const App: React.FC = () => {
  return (
    <GameContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </GameContextProvider>
  );
};

export default App;
