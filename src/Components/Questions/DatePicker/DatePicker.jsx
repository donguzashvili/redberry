import { useState } from 'react';

import { ReactComponent as Calendar } from '../../assets/images/calendar.svg';

import './DatePicker.css';

export default function DatePicker(props) {
  const [inputType, setInputType] = useState('text');
  const localStorageVal = localStorage.getItem(props.name) ? localStorage.getItem(props.name) : '';

  const updateValue = (e) => {
    setInputType('text');
    localStorage.setItem(props.name, e.currentTarget.value);
  };

  return (
    <div className="dateQuestion">
      <h4>{props.question}</h4>
      <div className="inputComponentWrapper">
        <div className="inputWraper">
          <div className="inputComponent">
            <label className="datePicker">
              <input
                name={props.name}
                type={inputType}
                placeholder={props.placeholder}
                defaultValue={props.defaultValue ? props.defaultValue : localStorageVal}
                disabled={props.defaultValue}
                onFocus={() => {
                  setInputType('date');
                }}
                onBlur={(e) => {
                  updateValue(e);
                }}
              />
              <Calendar onClick={() => setInputType('date')} />
            </label>
          </div>
          {/* <p className={error ? 'showParagraphError' : ''}>{props.error}</p> */}
        </div>
      </div>
    </div>
  );
}
