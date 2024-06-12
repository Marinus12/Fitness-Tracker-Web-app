import React from 'react';
import { SimpleGrid, Heading} from '@chakra-ui/react';
import PWK from '../../asset/Personalized-Workouts.PNG';
import PT from '../../asset/ProgressTracking.PNG';
import Nut from '../../asset/Nutrition.png';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <SimpleGrid>
    <section id="features" className="features-section">
      <div className="container">
        <Heading>Features</Heading>
        <div className="features">
          <div className="feature">
            <h3>Personalized Workouts</h3>
            <img src={PWK} className="PWK" alt="Personalized Workout" />
            <p>Customize workout plans based on user goals with adaptive training and a comprehensive exercise library.</p>
          </div>
          <div className="feature">
            <h3>Progress Tracking</h3>
            <img src={PT} className="PT" alt="Progress Tracker" />
            <p>Log workouts, monitor health metrics from wearables, and visualize progress with graphs and photos.</p>
          </div>
          <div className="feature">
            <h3>Nutrition Advice</h3>
            <img src={Nut} className="Nut" alt="Nutrition Advice" />
            <p>Provide tailored meal plans, calorie tracking, and healthy recipe suggestions for diverse dietary needs.</p>
          </div>
        </div>
      </div>
    </section>
    </SimpleGrid>
  );
}

export default FeaturesSection;