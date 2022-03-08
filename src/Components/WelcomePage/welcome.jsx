import React from 'react';
import { ReactComponent as RocketMan } from '../assets/images/rocketman.svg';
import { useNavigate } from 'react-router-dom';
import { url, token } from '../Questions/GlobalVariables';
import { useEffect, useCallback } from 'react';

import './welcome.css';

export default function WelcomePage(props) {
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    try {
      const Url = `${url}/skills`;

      const headers = new Headers();
      headers.append('token', `${token}`);

      const reqOptions = {
        method: 'GET',
        headers: headers,
      };
      const data = await fetch(Url, reqOptions);
      const skills = await data.json();
      sessionStorage.setItem('skills', JSON.stringify(skills));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
