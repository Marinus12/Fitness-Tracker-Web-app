import React from 'react';
// import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => (
  // <Box p={6 , 0} rounded="md" w="100%">
    <div className="form-wrapper">
      <h1>Login to Your Account</h1>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <Link to="/profile">
        <button>Login</button>
      </Link>
    </div>
  // </Box>
);

export default LoginForm;