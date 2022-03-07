import { useEffect, useState } from 'react';

import RadioQuestions from '../RadioQuestions/RadioQuestions';
import TextArea from '../TextArea/TextArea';

export default function AboutUser(props) {
  const [radioChanges, setRadioChanges] = useState(false);
  const showDevTalk = localStorage.getItem('will_organize_devtalk');

  const radioData = {
    key: 'will_organize_devtalk',
    question: 'Would you attend Devtalks and maybe also organize your own?',
    options: [
      { key: true, value: 'Yes' },
      { key: false, value: 'No', defaultChecked: true },
    ],
  };

  return (
    <div className="DynamicForm">
      <h3>What about you?</h3>

      <RadioQuestions
        name={radioData.key}
        question={radioData.question}
        options={radioData.options}
        change={() => setRadioChanges(!radioChanges)}
      />
      {showDevTalk === 'true' ? (
        <TextArea
          name="devtalk_topic"
          width={535}
          height={122}
          question="What would you speak about at Devtalk?"
          placeholder="I would..."
        />
      ) : null}

      <TextArea
        name="something_special"
        width={535}
        heigth={89}
        question="Tell us something special"
        placeholder="I..."
      />
    </div>
  );
}
