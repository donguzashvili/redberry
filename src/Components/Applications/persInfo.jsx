const PersInfo = ({ first_name, last_name, email, phone }) => {
  return (
    <div className="persInfo applicationGrid">
      <h6>Personal Information</h6>
      <div className="fieldWrapper">
        <span>First Name</span>
        <p>{first_name}</p>

        <span>Last Name</span>
        <p>{last_name}</p>

        <span>E Mail</span>
        <p>{email}</p>

        <span>Phone</span>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default PersInfo;
