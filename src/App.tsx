import { Route, Routes } from 'react-router-dom';

import Home from './screens/Home';
import Game from './screens/Game';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
