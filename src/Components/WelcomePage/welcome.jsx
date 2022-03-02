import React from 'react';
import { ReactComponent as RocketMan } from '../assets/images/rocketman.svg';
import { useNavigate } from 'react-router-dom';

import './welcome.css';

export default function WelcomePage(props) {
  const navigate = useNavigate();

  const startQuestions = () => {
    navigate('/questions/1');
    // props.startQuestionnaire();
  };

  return (
    <div className="welcome">
      <div className="welcomeWrapper">
        <div className="welcomeContent">
          <h1>Welcome Rocketeer !</h1>

          <button onClick={startQuestions}>Start Questionnaire</button>
          <p onClick={props.previousApplications}>Submitted Applications</p>

          <RocketMan />
        </div>
      </div>
    </div>
  );
}
