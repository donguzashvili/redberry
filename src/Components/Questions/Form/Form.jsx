import React from 'react';
import Pagination from './pagination';
import Input from '../Inputs/Input';

export default function Form(props) {
  return (
    <form className="form">
      <h3>Hey, Rocketeer, what are your coordinates?</h3>
      <Input name="first_name" type="text" placeholder="First Name" error="მინიმუმ 2 ასო" />
      <Input name="last_name" type="text" placeholder="Last Name" error="მინიმუმ 2 ასო" />
      <Input name="email" type="mail" placeholder="Email" error="არავალიდური მეილი" />
      <Input name="phone" type="tel" placeholder="+995 5_ _ _ _" value="+995" />
      <Pagination />
    </form>
  );
}
