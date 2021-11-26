import { useNavigate } from "react-router";
import { useState } from 'react';
import './Login.css'

export default function Login({ authed,  setAuthed }) {
  const navigate = useNavigate();
  const [loginValue, setLogin] = useState("");
  const [passValue, setPass] = useState("");
  const loginData = [
    {
      name: "123",
      password: "123"
    },
  ]

  function onLogin() {
    let res = loginData.filter((obj) => obj.name===loginValue && obj.password===passValue)
    if (res.length >= 1){
      setAuthed(true);
      navigate('/profile');
    }else{
      alert("Неверный логин или пароль")
    }
    
  }

  function logOut() {
    setAuthed(false);
    navigate('/login');
  }

  function LoggedIn(){
    return (
      <div>
        <h1>Hi</h1>
      </div>
      )
  }

  if(authed === true){
    logOut()
  }

  return (
    <div>
      <h1>
        Login page
        <div className={"loginBlock" + " unauth".repeat(authed)}>
          <h1>Login</h1>
          <input type="text"  onChange={e => setLogin(e.target.value)} value={loginValue}/>
          <h1>Password</h1>
          <input type="text"  onChange={e => setPass(e.target.value)} value={passValue}/>
        </div>
        
      </h1>
      <button onClick={!authed ? onLogin : logOut}>{!authed? "Login" : "Logout"}</button>
    </div>
    
  )
}