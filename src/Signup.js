import React, { useState } from 'react';
import {auth} from "./firebase-config"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(auth,email, password);
      setEmail(email);
      setPassword(password);
      alert("User added");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <input type="email" placeholder="username" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="password"  onChange={(e)=>setPassword(e.target.value)}/>
                    <button onClick={handleSubmit}>create Account</button>
                    <Link to="/signin" className="message ">
                    Already registered?
                    </Link>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Signup;
