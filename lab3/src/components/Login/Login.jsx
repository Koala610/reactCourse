import { useNavigate,  useLocation } from "react-router";
import { useState } from 'react';
import './Login.css'

export default function Login({ authed,  setAuthed, setUser, loginData }) {
  const navigate = useNavigate();
  let location = useLocation()
  let { from } = location.state || { from: { pathname: "/profile" } }
  const [loginValue, setLogin] = useState("");
  const [passValue, setPass] = useState("");

  function OnLogin() {
    let res = loginData.filter((obj) => obj.name===loginValue && obj.password===passValue)
    if (res.length === 1){
      setUser(res[0])
      setAuthed(true);
      navigate(from);
    }else{
      alert("Неверный логин или пароль")
    }
    
  }

  function logOut() {
    setUser({id:-1, name:"", password:"", friends:""})
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
    <div className="login-container">
      <h1>
        Login page
      </h1>
        <div className={"loginBlock" + " unauth".repeat(authed)}>
          <div className="form-input">
            <label>Login</label>
            <input type="text"  onChange={e => setLogin(e.target.value)} value={loginValue}/>
          </div>
          <div className="form-input">
            <label>Password</label>
            <input type="text"  onChange={e => setPass(e.target.value)} value={passValue}/>
          </div>
          <button onClick={!authed ? OnLogin : logOut}>{!authed? "Login" : "Logout"}</button>
        </div>
        
      
    </div>
    
  )
}