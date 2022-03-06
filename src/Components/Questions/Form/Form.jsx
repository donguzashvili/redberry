import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Pagination from './pagination';
import BasicInfo from './basicInfo';
import Skills from './skillsInfo';
import CovidStuff from './covidStuff';
import Error from '../../Error/error';

import './form.css';

export default function Form(props) {
  const [validate, setValidate] = useState(false);
  const [data, setData] = useState({});
  const [operator, setOperator] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    for (const key in data) {
      if (data[key]) {
        console.log(data[key]);
        if (typeof data[key] !== 'string') return localStorage.setItem(key, JSON.stringify(data[key]));
        localStorage.setItem(key, data[key]);
      }
    }
  }, [data]);

  const { page } = useParams();
  const navigate = useNavigate();

  const changePage = async (operator) => {
    const maxPageNumbers = 4;
    const minPageNumbers = 1;

    switch (operator) {
      case '+':
        if (page * 1 >= maxPageNumbers) return null;
        // console.log(await checkForValidation());
        if (!checkForValidation()) return null;
        else navigate(`/questions/${page * 1 + 1}`);
        break;
      case '-':
        if (page * 1 <= minPageNumbers) return;
        deleteLocalStorage();
        navigate(`/questions/${page * 1 - 1}`);
        break;
      default:
        if (operator + 1 > page * 1 && !checkForValidation()) return null;
        else navigate(`/questions/${operator + 1}`);
        break;
    }
  };

  const checkForValidation = () => {
    setValidate(!validate);
    const errorKeys = Object.keys(localStorage);
    //if at least one error in local storage you shall not pass
    let result = errorKeys.some((el) => (el.match(/^error/g) ? false : true));

    if (page * 1 === 1) return result;
    if (page * 1 === 2) return CheckSkills();
    if (page * 1 === 3) return checkCovidValidation();
    return false;
  };

  const deleteLocalStorage = () => {
    const storage = Object.keys(localStorage);
    storage.forEach((el) => (el.match(/^error/g) ? localStorage.removeItem(el) : null));
  };

  const getValues = (container) => {
    let tempObj = {};
    for (let i = 0; i < container.length; i++) {
      const element = container[i];

      if (element.type === 'radio' && element.checked) tempObj[element.name] = element.value;
      if (element.name !== 'id') tempObj['skills'] = JSON.parse(localStorage.getItem('skills'));
      if (element.nodeName === 'INPUT' && element.type === 'text') {
        tempObj[element.name] = element.value;
      }
    }
    return tempObj;
  };

  const CheckSkills = () => {
    const skills = localStorage.getItem('skills') ? JSON.parse(localStorage.getItem('skills')) : [];
    if (!skills) {
      setError('აუცილებელია მინიმუმ 1 ენის არჩევა!');
      return false;
    }
    if (skills.length > 0) return true;
    else {
      setError('აუცილებელია მინიმუმ 1 ენის არჩევა!');
      return false;
    }
  };

  const checkCovidValidation = () => {
    const workPreference = localStorage.getItem('work_preference');
    const vaccinated = localStorage.getItem('vaccinated');
    const hadCovid = localStorage.getItem('had_covid');
    const covidDate = localStorage.getItem('had_covid_at');
    const vacinationDate = localStorage.getItem('vaccinated_at');

    if (!workPreference || !hadCovid || !vaccinated) {
      setError('აუცილებელია ყველა კითხვას უპსაუხოთ!');
      return false;
    }
    if (hadCovid === 'true' && !covidDate) {
      setError('აუცილებელია მიუთითოთ კოვიდის თარიღი!');
      return false;
    }
    if (vaccinated === 'true' && !vacinationDate) {
      setError('აუცილებელია მიუთითოთ ვაქცინაციის თარიღი!');
      return false;
    }
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newData = getValues(e.target.elements);
    setData({ ...data, ...newData });
    changePage(operator);
    // console.log(e.target[0].value);
    // console.log(e.target.elements);
    // console.log(e.target.length);
  };

  console.log(error);

  return (
    <form onSubmit={(e) => submitForm(e)} className="form">
      <div className="formWrapper">
        {page * 1 === 1 ? <BasicInfo validate={validate} /> : null}
        {page * 1 === 2 ? <Skills sendError={setError} validate={validate} /> : null}
        {page * 1 === 3 ? <CovidStuff /> : null}
        <Pagination changePage={(op) => setOperator(op)} />
      </div>
      {error ? <Error message={error} closeWindow={() => setError(null)} /> : null}
    </form>
  );
}
