import PropTypes from 'prop-types';

ReplyItem.propTypes = {
  item: PropTypes.object.isRequired,
}

function ReplyItem({ item }){
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <img className="w-8 mr-2 rounded-full" src="https://i.namu.wiki/i/hMfGFgmU4rk14_RweTTrgckKeHC_QoYBLsTFceW9YU4e-lX3GN5Vj6uPsoDjVZhrK5GhpdId3mXv2vYjIYpgPhgb2NshnrPs_1CYA_5jlN5hprQD2FdY6OHddta8D2dyKRcVPyO43PuVtcDHUJa4xQ.webp" alt="" />
        <a className="text-blue-500" href="">{ item.user.name }</a>
        <time className="text-gray-500" dateTime={ item.createdAt }>{ item.createdAt }</time>
      </div>
      <pre className="whitespace-pre-wrap text-sm">{ item.comment }</pre>
      
    </div>
  );
}

export default ReplyItem;