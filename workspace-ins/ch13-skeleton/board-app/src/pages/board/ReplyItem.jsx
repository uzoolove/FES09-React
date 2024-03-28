import PropTypes from 'prop-types';

ReplyItem.propTypes = {
  item: PropTypes.object.isRequired,
}

function ReplyItem({ item }){
  return (
    <div className="shadow-md rounded-sm p-4 mb-4 bg-gray-50 dark:bg-gray-600">
      <div className="flex justify-between items-center mb-2">
        <img className="w-8 mr-2 rounded-full" src={`${import.meta.env.VITE_API_SERVER}/files/${ item.user.profile }`} alt="" />
        <a className="text-blue-500" href="">{ item._id } { item.user.name }</a>
        <time className="ml-auto text-gray-500 dark:text-gray-400" dateTime={ item.createdAt }>{ item.createdAt }</time>
      </div>
      <pre className="whitespace-pre-wrap">{ item.comment }</pre>
      
    </div>
  );
}

export default ReplyItem;