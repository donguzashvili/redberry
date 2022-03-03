import { useState, useEffect } from 'react';

export default function Input(props) {
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!props.validate) return;
    const input = document.getElementsByName(`${props.name}`)[0].value;
    validateInput(input);
  }, [props.validate]);

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
        console.log('ak shemodis');
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
            defaultValue={props.value}
          />
        </div>
        <p className={error ? 'showParagraphError' : ''}>{props.error}</p>
      </div>
    </div>
  );
}
