import CloseIcon from '@mui/icons-material/Close';

import './error.css';

const Error = (props) => {
  return (
    <div className="errorWrapper">
      <div className="errorContent">
        <CloseIcon onClick={props.closeWindow} />
        <h5>{props.message}</h5>
      </div>
    </div>
  );
};

export default Error;
