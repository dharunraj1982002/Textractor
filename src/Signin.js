import React, { useState } from 'react';
import {auth} from "./firebase-config"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Signup.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  function handleSubmit (event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth,email, password)
      .then(() => {
        alert('Successfully logged in!');
        navigate("/home");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <input type="email" placeholder="username" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="password"  onChange={(e)=>setPassword(e.target.value)}/>
                    <button onClick={handleSubmit}>Login</button>
                    <Link to="/signup" className="message ">
                    Not registered?
                    </Link>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Signin;
