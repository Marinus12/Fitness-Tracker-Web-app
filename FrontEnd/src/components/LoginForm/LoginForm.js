import React from 'react';
import './LoginForm.css';

const LoginForm = () => (
  <div className="form-wrapper">
    <h2>Login to Your Account</h2>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Login</button>
  </div>
);

export default LoginForm;