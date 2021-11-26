import { BrowserRouter as Router, Routes, Route,  Link, Outlet, Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

import Profile from "./components/Profile/Profile.jsx";
import Login from './components/Login/Login.jsx';
import Home from "./components/Home/Home.jsx";
import Friends from './components/Friends/Friends.jsx';

import './App.css';



function App() {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState({id:-1, name: "", password: "", friends: []})
  const [users, setUsers] = useState(
    [
      {
        id: 0,
        name: "123",
        password: "123",
        friends: [1 ,2 ,3],
        age: 15,
      },
      {
        id: 1,
        name: "123123123",
        password: "123",
        friends: [4 ,2 ,3],
        age: 18,
      },
      {
        id: 2,
        name: "hjgj",
        password: "123",
        friends: [1 ,3],
        age: 20,
      },
      {
        id: 3,
        name: "fgjgk",
        password: "123",
        friends: [1 ,2 ,3],
        age: 7,
      },
      {
        id: 4,
        name: "khjk",
        password: "123",
        friends: [1, 2],
        age: 12,
      },
    ])
  return (

    <main>
      <Router>
        <nav>
          <ul className="list-navigation">
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
          </ul>
          <h4>
              <Link to="/login">
                {!authed?"Login":"Logout"}
              </Link>
          </h4>
        </nav>
        <Routes>
          <Route path="/profile" element={
            <CheckForAuth authed={authed}>
               <Profile user={user}/>
            </CheckForAuth>
          } />

          <Route path="/home" element={<Home user={user}/>} />

          <Route path="/friends" element={
            <CheckForAuth authed={authed}>
               <Friends user={user} users={users} />
            </CheckForAuth>
          } />

          <Route path="/login" element={<Login authed={authed} setAuthed={setAuthed} setUser={setUser} loginData={users}/>} />
          
          <Route path="*" element={<Profile />} />
        </Routes>
      </Router>
    </main>
  );
}


function CheckForAuth({ authed, children }) {
  let location = useLocation()
  return authed ?
        children :
        <Navigate to="/login" state={{ from: location }} />
}

export default App;
