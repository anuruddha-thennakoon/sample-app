import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import About from './About/About';
import Profile from './Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
