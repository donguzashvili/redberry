import RadioQuestions from '../Questions/RadioQuestions/RadioQuestions';
import TextArea from '../Questions/TextArea/TextArea';

export default function Insigts({ will_organize_devtalk, devtalk_topic, something_special }) {
  const radioData = {
    key: 'will_organize_devtalk',
    question: 'Would you attend Devtalks and maybe also organize your own?',
    options: [
      { key: true, value: 'Yes' },
      { key: false, value: 'No', defaultChecked: true },
    ],
  };

  return (
    <div className="insigts applicationGrid">
      <h6>Insigts</h6>
      <RadioQuestions
        name={radioData.key}
        question={radioData.question}
        options={radioData.options}
        defaultChecked={will_organize_devtalk}
      />
      {will_organize_devtalk ? (
        <TextArea
          name="devtalk_topic"
          width={447}
          height={122}
          question="What would you speak about at Devtalk?"
          placeholder="I would..."
          defaultValue={devtalk_topic}
        />
      ) : null}

      <TextArea
        name="something_special"
        width={447}
        heigth={89}
        question="Tell us something special"
        placeholder="I..."
        defaultValue={something_special}
      />
    </div>
  );
}
