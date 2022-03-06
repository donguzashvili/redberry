import RadioQuestions from '../RadioQuestions/RadioQuestions';
import DatePicker from '../DatePicker/DatePicker';

import { useState } from 'react';

const questions = require('../../assets/info/questions.json');

export default function CovidStuff() {
  const [radioChanges, setRadioChanges] = useState(false);

  return (
    <div className="DynamicForm">
      <h3>Covid Stuff</h3>
      {questions.map((item, index) => {
        if (item.options)
          return (
            <RadioQuestions
              key={index}
              name={item.key}
              question={item.question}
              options={item.options}
              change={() => setRadioChanges(!radioChanges)}
            />
          );
        else if (localStorage.getItem(item.related) && localStorage.getItem(item.related) === 'true')
          return <DatePicker key={index} name={item.key} question={item.question} placeholder="Date" />;
        return null;
      })}
    </div>
  );
}
