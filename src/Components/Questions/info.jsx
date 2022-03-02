const Info = (props) => {
  return (
    <div className="info">
      <div className="infoWrapper">
        <h3>{props.header}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Info;
