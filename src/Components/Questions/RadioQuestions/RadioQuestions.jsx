import React from 'react';

import Label from './RadioInput';

import './RadioQuestions.css';

export default function RadioQuestions({ name, change, question, options, defaultChecked }) {
  return (
    <div className="radioQuestions">
      <h4>{question}</h4>
      {options
        ? options.map((item, index) => {
            return (
              <Label
                key={index}
                defaultChecked={defaultChecked}
                name={name}
                change={change}
                text={item}
                question={question}
                disabled={defaultChecked === null || defaultChecked === undefined ? null : `${defaultChecked}`}
              />
            );
          })
        : null}
    </div>
  );
}
