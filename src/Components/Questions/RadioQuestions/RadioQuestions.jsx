import React from 'react';

import Label from './RadioInput';

import './RadioQuestions.css';

export default function RadioQuestions(props) {
  return (
    <div className="radioQuestions">
      <h4>{props.question}</h4>
      {props.options.map((item, index) => {
        return <Label key={index} name={props.name} change={props.change} text={item} question={props.question} />;
      })}
    </div>
  );
}
