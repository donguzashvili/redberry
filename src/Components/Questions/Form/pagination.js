import { ReactComponent as Previous } from '../../assets/images/Previous.svg';
import { ReactComponent as Next } from '../../assets/images/Next.svg';
import { useParams, useNavigate } from 'react-router-dom';

const data = require('../../assets/info/info.json');

function Pagination(props) {
  const { page } = useParams();
  const navigate = useNavigate();
  return (
    <div className="pagination">
      <Previous onClick={() => (page > 1 ? navigate(`/questions/${page * 1 - 1}`) : null)} />
      {data.map((elem, index) => {
        return (
          <span
            onClick={() => navigate(`/questions/${index + 1}`)}
            key={index}
            className={page >= index + 1 ? 'active' : ''}
          ></span>
        );
      })}
      <Next onClick={() => (page < 4 ? navigate(`/questions/${page * 1 + 1}`) : null)} />
    </div>
  );
}

export default Pagination;
