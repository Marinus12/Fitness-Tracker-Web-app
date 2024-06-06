import React from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css';
import { Heading } from '@chakra-ui/react';
import FitnessLogo from '../../asset/FitnessLogo.png';


const SignupForm = () => (
  <div className="form-wrapper">
    <div>
      <img src={FitnessLogo} className="App-logo" alt="logo" />
    </div>
    <Heading>Create Your Account</Heading>
    <input type="First Name" placeholder="First Name" />
    <input type="Last Name" placeholder="Last Name" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Confirm Password" />
    <Link to="/goal">
      <button>Sign Up</button>
     </Link>
  </div>
);

export default SignupForm;