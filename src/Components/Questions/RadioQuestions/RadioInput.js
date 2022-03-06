const label = (props) => {
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
        defaultChecked={localStorage.getItem(props.name) === `${props.text.key}`}
      />
      <p>{props.text.value}</p>
    </label>
  );
};

export default label;
