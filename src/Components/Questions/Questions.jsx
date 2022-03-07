import React from 'react';
import Info from './info';
import Form from './Form/Form';
import Submit from '../Submit';
import { useParams } from 'react-router-dom';
import './Questions.css';

export default function Questions(props) {
  const data = require('../assets/info/info.json');
  const { page } = useParams();

  return (
    <React.Fragment>
      {page * 1 === 5 ? (
        <Submit />
      ) : (
        <div className="questionsContent">
          <Form />
          <Info header={data[page - 1].header} text={data[page - 1].text} />
        </div>
      )}
    </React.Fragment>
  );
}
