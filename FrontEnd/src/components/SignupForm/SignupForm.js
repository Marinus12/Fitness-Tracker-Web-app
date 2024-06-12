import React from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css';
import { Heading } from '@chakra-ui/react';
import FitnessLogo from '../../asset/FitnessLogo.png';


const SignupForm = () => (
  <div className="form-wrapper-S">
    <div>
      <img src={FitnessLogo} className="App-logo" alt="logo" />
    </div>
    <Heading>Signup to FitGuage</Heading>
    <input type="First Name" placeholder="First Name" />
    <input type="Last Name" placeholder="Last Name" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Confirm Password" />
    <Link to="/goal">
      <button>Create Account</button>
     </Link>
    <Link to="/login">
    <p className='Text'>Already have an account? Login now</p>
    </Link>
  </div>
);

export default SignupForm;