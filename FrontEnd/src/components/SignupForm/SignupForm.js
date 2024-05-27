import React from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => (
  <div className="form-wrapper">
    <h2>Create Your Account</h2>
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Confirm Password" />
    <Link to="/goal">
      <button>Sign Up</button>
     </Link>
  </div>
);

export default SignupForm;