import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

BoardListItem.propTypes = {
  item: PropTypes.object.isRequired
};

function BoardListItem({ item }){
  return (
    <tr>
      <td>{ item._id }</td>
      <td><Link to={`/boards/${ item._id }`}>{ item.title }</Link></td>
      <td>{ item.user.name }</td>
      <td>30</td>
      <td>{ item.updatedAt }</td>
    </tr>
  );
}

export default BoardListItem;