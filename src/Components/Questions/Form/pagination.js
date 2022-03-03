import { ReactComponent as Previous } from '../../assets/images/Previous.svg';
import { ReactComponent as Next } from '../../assets/images/Next.svg';
import { useParams } from 'react-router-dom';

const data = require('../../assets/info/info.json');

function Pagination(props) {
  const { page } = useParams();

  return (
    <div className="pagination">
      <Previous type="submit" onClick={() => props.changePage('-')} />

      {data.map((elem, index) => {
        return (
          <span
            type="submit"
            onClick={() => props.changePage(null, index)}
            key={index}
            className={page >= index + 1 ? 'active' : ''}
          ></span>
        );
      })}

      <Next type="submit" onClick={() => props.changePage('+')} />
    </div>
  );
}

export default Pagination;
