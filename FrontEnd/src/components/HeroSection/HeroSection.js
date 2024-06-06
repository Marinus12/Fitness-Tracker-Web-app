import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
// import { Heading } from '@chakra-ui/react';

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <h1>Welcome to FitGuage</h1>
        <p>Your success starts here. Discover our features and benefits.</p>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
