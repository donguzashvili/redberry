import Input from '../Inputs/Input';

export default function DynamicForm({ validate }) {
  return (
    <div className="DynamicForm">
      <h3>Hey, Rocketeer, what are your coordinates?</h3>
      <Input
        validate={validate}
        name="first_name"
        type="text"
        placeholder="First Name"
        err="* first name is required"
      />
      <Input
        validate={validate}
        name="last_name"
        type="text"
        placeholder="Last Name"
        err="* last name should include 3 or more characters"
      />
      <Input validate={validate} name="email" type="mail" placeholder="E Mail" err="* Invalid mail" />
      <Input validate={validate} name="phone" type="tel" placeholder="+995 5_ _ _ _" value="+995" />
    </div>
  );
}
