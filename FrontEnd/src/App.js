import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandPage from './pages/LandPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import GoalPage from './pages/GoalPage';
import WorkoutPage from './pages/WorkoutPage';

// import Navbar from './components/NavBar';
import Home from './pages/Home';
import WorkoutDetail from './pages/WorkoutDetail';
import Profile from './pages/Profile';

import './styles/globalStyles.css';

const App = () => (
  <ChakraProvider>
    <Router>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/goal" element={<GoalPage />} />
          <Route path="/workout" element={<WorkoutPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/workout/:id" element={<WorkoutDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
  </ChakraProvider>
);

export default App;