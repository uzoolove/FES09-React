import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Pagination.propTypes = {
  totalPage: PropTypes.number,
  current: PropTypes.number,
};

function Pagination({ totalPage, current=1 }){
  const pageList = [];

  for(let page=1; page<=totalPage; page++){
    pageList.push(<li key={ page }><Link to={ `/posts` }>{ page }</Link></li>);
  }

  return (
    <div>
      <ul>
        { pageList }
      </ul>
    </div>
  );
}

export default Pagination;