import { token, url } from './Questions/GlobalVariables';
import { useParams, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import './Submit.css';

const Submit = () => {
  const [data, setData] = useState(null);
  const [finish, setFinish] = useState(false);
  const { page } = useParams();
  const navigate = useNavigate();

  const submitForm = () => {
    let tempObj = {};
    tempObj['token'] = token;
    const keys = Object.keys(localStorage);
    keys.forEach((el) => {
      if (el === 'had_covid' || el === 'vaccinated' || el === 'will_organize_devtalk' || el === 'skills') {
        tempObj[el] = JSON.parse(localStorage.getItem(el));
      } else {
        tempObj[el] = localStorage.getItem(el);
      }
      localStorage.removeItem(el);
    });
    setData(tempObj);
  };

  const sendData = useCallback(async () => {
    try {
      const Url = `${url}/application`;

      const headers = new Headers();
      headers.append('token', token);
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');

      const reqOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      };

      const res = await fetch(Url, reqOptions);
      const response = await res.json();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }, [data]);

  useEffect(() => {
    if (!data) return;
    sendData();
    setFinish(true);
  }, [data, sendData]);

  useEffect(() => {
    if (finish)
      setTimeout(() => {
        sessionStorage.removeItem('done');
        navigate('/');
      }, 3000);
  }, [finish, navigate]);

  return (
    <div className="submitPage">
      {finish ? (
        <h2>
          Thanks for Joining <span>😊</span>
        </h2>
      ) : (
        <div className="submitBtnWrapper">
          <button onClick={() => submitForm()}>Submit</button>
          <p onClick={() => navigate(`/questions/${page * 1 - 1}`)}>go back</p>
        </div>
      )}
    </div>
  );
};

export default Submit;
