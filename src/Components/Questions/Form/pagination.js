import { ReactComponent as Previous } from '../../assets/images/Previous.svg';
import { ReactComponent as Next } from '../../assets/images/Next.svg';
import { useParams, useNavigate } from 'react-router-dom';

const data = require('../../assets/info/info.json');

function Pagination(props) {
  const { page } = useParams();
  const navigate = useNavigate();

  const changePage = (operator, index) => {
    const maxPageNumbers = 4;
    const minPageNumbers = 1;
    const errors = checkForValidation();

    switch (operator) {
      case '+':
        if (page > maxPageNumbers) return;
        navigate(`/questions/${page * 1 + 1}`);
        break;
      case '-':
        if (page < minPageNumbers) return;
        navigate(`/questions/${page * 1 - 1}`);
        break;
      default:
        navigate(`/questions/${index + 1}`);
        break;
    }
  };

  const checkForValidation = () => {
    const errorKeys = Object.keys(localStorage);
    console.log(errorKeys);
  };

  return (
    <div className="pagination">
      <Previous onClick={() => changePage('-')} />

      {data.map((elem, index) => {
        return (
          <span
            onClick={() => changePage(null, index)}
            key={index}
            className={page >= index + 1 ? 'active' : ''}
          ></span>
        );
      })}

      <Next onClick={() => changePage('+')} />
    </div>
  );
}

export default Pagination;
