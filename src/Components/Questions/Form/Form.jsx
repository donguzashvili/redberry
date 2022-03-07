import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Pagination from './pagination';
import BasicInfo from './basicInfo';
import Skills from './skillsInfo';
import CovidStuff from './covidStuff';
import AboutUser from './aboutUser';
import Error from '../../Error/error';

import { validateEmail } from '../GlobalVariables';

import './form.css';

export default function Form(props) {
  const [validate, setValidate] = useState(false);
  const [data, setData] = useState({});
  const [operator, setOperator] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    for (const key in data) {
      if (data[key]) {
        if (typeof data[key] !== 'string') return localStorage.setItem(key, JSON.stringify(data[key]));
        localStorage.setItem(key, data[key]);
      }
    }
  }, [data]);

  const { page } = useParams();
  const navigate = useNavigate();

  const changePage = async (operator) => {
    const maxPageNumbers = 5;
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
    if (page * 1 === 1) return checkBasicInfo();
    if (page * 1 === 2) return checkSkills();
    if (page * 1 === 3) return checkCovidValidation();
    if (page * 1 === 4) return checkAboutUser();
    return false;
  };

  const checkBasicInfo = () => {
    const name = localStorage.getItem('first_name');
    const surname = localStorage.getItem('last_name');
    const mail = localStorage.getItem('email');
    if (!name || !surname || !mail) return false;
    if (name.length <= 2) return false;
    if (surname.length <= 2) return false;
    if (!validateEmail(mail)) return false;
    return true;
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

  const checkSkills = () => {
    const skills = localStorage.getItem('skills') ? JSON.parse(localStorage.getItem('skills')) : [];
    if (!skills) {
      setError('Please choose at least one language!');
      return false;
    }
    if (skills.length > 0) return true;
    else {
      setError('Please choose at least one language!');
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
      setError('Please answer all questions!');
      return false;
    }
    if (hadCovid === 'true' && !covidDate) {
      setError('Please input when you had covid(date)!');
      return false;
    }
    if (vaccinated === 'true' && !vacinationDate) {
      setError('Please input when you vaccinated(date)!');
      return false;
    }
    return true;
  };

  const checkAboutUser = () => {
    const devTalk = localStorage.getItem('will_organize_devtalk');
    const devTopic = localStorage.getItem('devtalk_topic');
    const somethingSpecial = localStorage.getItem('something_special');
    if (!devTalk) return setError('Please choose one option!');
    if (devTalk === 'true' && !devTopic) return setError('Please fill devtalk topic!');
    if (!somethingSpecial) return setError('Please fill tell us something special!');
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newData = getValues(e.target.elements);
    setData({ ...data, ...newData });
    changePage(operator);
  };

  return (
    <form onSubmit={(e) => submitForm(e)} className="form">
      <div className="formWrapper">
        {page * 1 === 1 ? <BasicInfo validate={validate} /> : null}
        {page * 1 === 2 ? <Skills sendError={setError} validate={validate} /> : null}
        {page * 1 === 3 ? <CovidStuff /> : null}
        {page * 1 === 4 ? <AboutUser /> : null}
        <Pagination changePage={(op) => setOperator(op)} />
      </div>
      {error ? <Error message={error} closeWindow={() => setError(null)} /> : null}
    </form>
  );
}
