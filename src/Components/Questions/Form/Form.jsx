import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Pagination from './pagination';
import DynamicForm from './DynamicForm';

export default function Form(props) {
  const [validate, setValidate] = useState(false);

  const { page } = useParams();
  const navigate = useNavigate();

  const changePage = async (operator, index) => {
    const maxPageNumbers = 4;
    const minPageNumbers = 1;

    switch (operator) {
      case '+':
        console.log(await checkForValidation());
        if (page * 1 >= maxPageNumbers) return null;
        if (await checkForValidation()) return null;
        else navigate(`/questions/${page * 1 + 1}`);
        break;
      case '-':
        if (page * 1 <= minPageNumbers) return;
        deleteLocalStorage();
        navigate(`/questions/${page * 1 - 1}`);
        break;
      default:
        if (index + 1 > page * 1 && (await checkForValidation())) return null;
        else navigate(`/questions/${index + 1}`);
        break;
    }
  };

  const checkForValidation = async () => {
    setValidate(true);
    const errorKeys = await Object.keys(localStorage);
    setValidate(false);
    //if at least one error in local storage you shall not pass
    let result = errorKeys.some((el) => (el.match(/^error/g) ? true : false));
    return result;
  };

  const deleteLocalStorage = () => {
    const storage = Object.keys(localStorage);
    storage.forEach((el) => localStorage.removeItem(el));
  };

  return (
    <form className="form">
      <div className="formWrapper">
        <DynamicForm validate={validate} />
        <Pagination changePage={changePage} />
      </div>
    </form>
  );
}
