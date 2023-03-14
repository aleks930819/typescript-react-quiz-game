import { Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/game-over" element={<GameOver />} />
    </Routes>
  );
}

export default App;
