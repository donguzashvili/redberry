const Label = (props) => {
  const defaultChecked =
    `${props.defaultChecked}` === `${props.text.key}` || localStorage.getItem(props.name) === `${props.text.key}`;

  return (
    <label>
      <input
        type="radio"
        name={props.name}
        value={props.text.key}
        onClick={() => {
          props.change();
          localStorage.setItem(`${props.name}`, props.text.key);
        }}
        defaultChecked={defaultChecked}
        disabled={Boolean(props.disabled)}
      />
      <p>{props.text.value}</p>
    </label>
  );
};

export default Label;
