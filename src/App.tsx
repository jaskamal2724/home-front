import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import User1 from './components/User1';
import User2 from './components/User2';
import { initializeSocket } from './services/socket';
import Home from './components/Home';

function App() {
  useEffect(() => {
    initializeSocket();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/User1" element={<User1 />} />
        <Route path="/User2" element={<User2 />} />
      </Routes>
    </Router>
  );
}

export default App;

