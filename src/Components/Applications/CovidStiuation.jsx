import RadioQuestions from '../Questions/RadioQuestions/RadioQuestions';
import DatePicker from '../Questions/DatePicker/DatePicker';

const data = require('../assets/info/questions.json');

export default function CovidSituation(props) {
  return (
    <div className="covidSituation applicationGrid">
      <h6>Covid Situation</h6>
      {data
        ? data.map((item, index) => {
            if (!item.options && props[item.key])
              return (
                <DatePicker
                  key={index}
                  name={item.key}
                  question={item.question}
                  defaultValue={props[item.key]}
                  placeholder="Date"
                />
              );
            if (item.options)
              return (
                <RadioQuestions
                  key={index}
                  name={item.key}
                  question={item.question}
                  options={item.options}
                  defaultChecked={props[item.key]}
                />
              );
            return null;
          })
        : null}
    </div>
  );
}
