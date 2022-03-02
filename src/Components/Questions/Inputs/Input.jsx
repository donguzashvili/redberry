import { useState } from 'react';

export default function Input(props) {
  const [error, setError] = useState(false);

  const validateInput = (value) => {
    switch (props.name) {
      case 'name':
        if (value.length < 2) setError(true);
        else setError(false);
        break;
      case 'surname':
        if (value.length < 2) setError(true);
        else setError(false);
        break;
      case 'mail':
        if (!validateEmail(value)) setError(true);
        else setError(false);
        break;
      default:
        return;
    }
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
