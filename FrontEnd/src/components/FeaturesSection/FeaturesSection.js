import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2>Features</h2>
        <div className="features">
          <div className="feature">
            <h3>Feature 1</h3>
            <p>Describe the first feature here.</p>
          </div>
          <div className="feature">
            <h3>Feature 2</h3>
            <p>Describe the second feature here.</p>
          </div>
          <div className="feature">
            <h3>Feature 3</h3>
            <p>Describe the third feature here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;