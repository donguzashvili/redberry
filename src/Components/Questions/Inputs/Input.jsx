import { useState, useEffect } from 'react';

import './input.css';

export default function Input(props) {
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!props.validate) return;
    console.log(props.validate);
    const input = document.getElementsByName(`${props.name}`)[0].value;
    localStorage.setItem(props.name, input);
    validateInput(input);
  }, [props.validate]);

  const validateInput = (value) => {
    console.log(value);
    handleError(false);
    switch (props.name) {
      case 'first_name':
        if (value.length < 2) return handleError(true);
        localStorage.setItem(props.name, value);
        break;
      case 'last_name':
        if (value.length < 2) return handleError(true);
        localStorage.setItem(props.name, value);
        break;
      case 'email':
        if (!validateEmail(value)) return handleError(true);
        localStorage.setItem(props.name, value);
        break;
      case 'experience':
        if (value.length === 0) return handleError(true);
        break;
      default:
        localStorage.setItem(props.name, value);
        return;
    }
  };

  const handleError = (bool) => {
    setError(bool);
    if (bool === true) return localStorage.setItem(`error_${props.name}`, props.error);
    localStorage.removeItem(`error_${props.name}`);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="inputComponentWrapper">
      <div className="inputWraper">
        <div className={error ? 'inputComponent validationError' : 'inputComponent'}>
          <input
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            onBlur={(e) => validateInput(e.currentTarget.value)}
            defaultValue={localStorage.getItem(`${props.name}`) ? localStorage.getItem(`${props.name}`) : ''}
            // onInput={(e) => {
            //   if (!/^+995/.test(e.currentTarget.value)) e.preventDefault();
            // }}
          />
        </div>
        <p className={error ? 'showParagraphError' : ''}>{props.error}</p>
      </div>
    </div>
  );
}
