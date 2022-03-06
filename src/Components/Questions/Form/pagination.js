import { ReactComponent as Previous } from '../../assets/images/Previous.svg';
import { ReactComponent as Next } from '../../assets/images/Next.svg';
import { useParams } from 'react-router-dom';

import './pagination.css';

const data = require('../../assets/info/info.json');

function Pagination(props) {
  const { page } = useParams();

  return (
    <div className="pagination">
      <button type="submit" onClick={() => props.changePage('-')}>
        <Previous type="submit" />
      </button>

      {data.map((elem, index) => {
        return (
          <button
            type="submit"
            onClick={() => props.changePage(index)}
            key={index}
            className={page >= index + 1 ? 'btns active' : 'btns'}
          ></button>
        );
      })}

      <button type="submit" onClick={() => props.changePage('+')}>
        <Next type="submit" />
      </button>
    </div>
  );
}

export default Pagination;
