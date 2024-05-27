import React from 'react';
import { FaDumbbell, FaWeight } from 'react-icons/fa';
import './GoalSelection.css';

const GoalSelection = () => (
  <div className="goal-wrapper">
    <h2>Hi, Set a Goal</h2>
    <button className="goal-button">
      <FaDumbbell size={30} />
      <span>Get Fit</span>
    </button>
    <button className="goal-button">
      <FaWeight size={30} />
      <span>Lose Weight</span>
    </button>
  </div>
);

export default GoalSelection;