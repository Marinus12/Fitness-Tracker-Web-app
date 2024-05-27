import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandPage from './pages/LandPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import GoalPage from './pages/GoalPage';
import WorkoutPage from './pages/WorkoutPage';
import './styles/globalStyles.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/goal" element={<GoalPage />} />
      <Route path="/workout" element={<WorkoutPage />} />
    </Routes>
  </Router>
);

export default App;