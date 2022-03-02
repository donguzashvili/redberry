import React from 'react';
import Pagination from './pagination';
import Input from '../Inputs/Input';

export default function Form(props) {
  return (
    <div className="form">
      <Input name="name" type="text" placeholder="First Name" error="მინიმუმ 2 ასო" />
      <Input name="surname" type="text" placeholder="Last Name" error="მინიმუმ 2 ასო" />
      <Input name="mail" type="mail" placeholder="Email" error="არავალიდური მეილი" />
      <Input name="tel" type="tel" placeholder="+995 5_ _ _ _" value="+995" />

      <Pagination />
    </div>
  );
}
