import React from 'react';
// import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import './LoginForm.css';
import { Heading } from '@chakra-ui/react';
import FitnessLogo from '../../asset/FitnessLogo.png';


const LoginForm = () => (
  // <Box p={6 , 0} rounded="md" w="100%">
    <div className="form-wrapper-L">
      <div>
        <img src={FitnessLogo} className="App-logo" alt="logo" />
      </div>
      <Heading>Login to Your Account</Heading>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Link to="/profile">
        <button>Log In</button>
      </Link>
      <Link to="/signup">
      <p className='Text'>
        Don't have an account? Sign up
      </p>
      </Link>
    </div>
  // </Box>
);

export default LoginForm;