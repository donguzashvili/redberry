import React from 'react';
import { ReactComponent as RocketMan } from '../assets/images/rocketman.svg';
import { useNavigate } from 'react-router-dom';

import './welcome.css';

export default function WelcomePage(props) {
  const navigate = useNavigate();

  return (
    <div className="welcome">
      <div className="welcomeWrapper">
        <div className="welcomeContent">
          <h1>Welcome Rocketeer !</h1>

          <button onClick={() => navigate('/questions/1')}>Start Questionnaire</button>
          <p onClick={() => navigate('/applications')}>Submitted Applications</p>

          <RocketMan />
        </div>
      </div>
    </div>
  );
}
