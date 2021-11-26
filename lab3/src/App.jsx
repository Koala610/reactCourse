import { BrowserRouter as Router, Routes, Route,  Link, Outlet, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Profile from "./components/Profile/Profile.jsx";
import Login from './components/Login/Login.jsx';
import Home from "./components/Home/Home.jsx";
import Friends from './components/Friends/Friends.jsx';

import './App.css';



function App() {
  const [authed, setAuthed] = useState(false);
  return (
    <main>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/friends">
                Friends
              </Link>
            </li>
            <li>
              <Link to="/login">
                {!authed?"Login":"Logout"}
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/profile" element={
            <CheckForAuth authed={authed}>
               <Profile />
               <h1>Hello!</h1>
            </CheckForAuth>
          } />

          <Route path="/home" element={<Home />} />

          <Route path="/friends" element={
            <CheckForAuth authed={authed}>
               <Friends />
            </CheckForAuth>
          } />

          <Route path="/login" element={<Login authed={authed} setAuthed={setAuthed} />} />
          
          <Route path="*" element={<Profile />} />
        </Routes>
      </Router>
    </main>
  );
}


function CheckForAuth({ authed, children }) {
  return authed ?
        children :
        <Navigate to="/login" replace />
}

export default App;
