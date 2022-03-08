import { useCallback, useState, useEffect } from 'react';

import { validateEmail } from '../GlobalVariables';

import './input.css';

export default function Input({ name, validate, placeholder, type, err }) {
  const [error, setError] = useState(false);

  const handleError = useCallback(
    (bool) => {
      setError(bool);
      if (bool === true) return localStorage.setItem(`error_${name}`, error);
      localStorage.removeItem(`error_${name}`);
    },
    [error, name]
  );

  const validateInput = useCallback(
    (value) => {
      handleError(false);
      switch (name) {
        case 'first_name':
          if (value.length <= 2) return handleError(true);
          localStorage.setItem(name, value);
          break;
        case 'last_name':
          if (value.length <= 2) return handleError(true);
          localStorage.setItem(name, value);
          break;
        case 'email':
          if (!validateEmail(value)) return handleError(true);
          localStorage.setItem(name, value);
          break;
        case 'experience':
          if (value.length === 0) return handleError(true);
          break;
        default:
          if (value.length !== 0) return localStorage.setItem(name, value);
          break;
      }
    },
    [handleError, name]
  );

  useEffect(() => {
    if (!validate || name === 'experience') return;
    const input = document.getElementsByName(`${name}`)[0].value;
    if (input.length !== 0) localStorage.setItem(name, input);
    validateInput(input);
  }, [validate, name, validateInput]);

  return (
    <div className="inputComponentWrapper">
      <div className="inputWraper">
        <div className={error ? 'inputComponent validationError' : 'inputComponent'}>
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            onBlur={(e) => validateInput(e.currentTarget.value)}
            defaultValue={localStorage.getItem(`${name}`) ? localStorage.getItem(`${name}`) : ''}
            // onInput={(e) => {
            //   if (!/^+995/.test(e.currentTarget.value)) e.preventDefault();
            // }}
          />
        </div>
        <p className={error ? 'showParagraphError' : ''}>{err}</p>
      </div>
    </div>
  );
}
