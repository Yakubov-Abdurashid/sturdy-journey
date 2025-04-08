import { Routes, Route } from 'react-router-dom';
import Home from './pages/hamid/home';
import Royhat from './pages/hamid/royhart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/royhat" element={<Royhat />} />
    </Routes>
  );
}

export default App;
