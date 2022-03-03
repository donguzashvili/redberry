import { useState } from 'react';

export default function Input(props) {
  const [error, setError] = useState(false);

  const validateInput = (value) => {
    switch (props.name) {
      case 'first_name':
        if (value.length >= 2) return handleError(false);
        handleError(true);
        break;
      case 'last_name':
        if (value.length >= 2) return handleError(false);
        handleError(true);
        break;
      case 'email':
        if (validateEmail(value)) return handleError(false);
        handleError(true);
        break;
      default:
        return;
    }
  };

  const handleError = (bool) => {
    setError(bool);
    if (bool === true) return localStorage.setItem(`${props.name}_error`, props.error);
    localStorage.removeItem(`${props.name}_error`);
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
      <div className={error ? 'inputComponent validationError' : 'inputComponent'}>
        <input
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          onBlur={(e) => validateInput(e.currentTarget.value)}
          defaultValue={props.value}
        />
      </div>
      <p className={error ? 'showParagraphError' : ''}>{props.error}</p>
    </div>
  );
}
