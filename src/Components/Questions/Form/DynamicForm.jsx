import Input from '../Inputs/Input';

export default function DynamicForm(props) {
  return (
    <div className="DynamicForm">
      <h3>Hey, Rocketeer, what are your coordinates?</h3>
      <Input validate={props.validate} name="first_name" type="text" placeholder="First Name" error="მინიმუმ 2 ასო!" />
      <Input validate={props.validate} name="last_name" type="text" placeholder="Last Name" error="მინიმუმ 2 ასო!" />
      <Input validate={props.validate} name="email" type="mail" placeholder="Email" error="არავალიდური მეილი!" />
      <Input validate={props.validate} name="phone" type="tel" placeholder="+995 5_ _ _ _" value="+995" />
    </div>
  );
}
