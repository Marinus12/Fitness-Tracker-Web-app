import React from 'react';
import './LoginForm.css';

const LoginForm = () => (
  <div className="form-wrapper">
    <h2>Login to Your Account</h2>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Confirm Password" />
    <button>Sign Up</button>
  </div>
);

export default LoginForm;