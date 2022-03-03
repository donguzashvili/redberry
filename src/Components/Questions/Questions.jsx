import React from 'react';
import Info from './info';
import Form from './Form/Form';
import { useParams } from 'react-router-dom';
import './Questions.css';

export default function Questions(props) {
  const data = require('../assets/info/info.json');
  const { page } = useParams();

  return (
    <div className="questionsContent">
      <Form />
      <Info header={data[page - 1].header} text={data[page - 1].text} />
    </div>
  );
}
