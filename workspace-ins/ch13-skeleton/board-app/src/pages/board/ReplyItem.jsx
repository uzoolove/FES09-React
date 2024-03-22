import PropTypes from 'prop-types';

ReplyItem.propTypes = {
  item: PropTypes.object.isRequired,
}

function ReplyItem({ item }){
  return (
    <div>
      <h5>
        <img width="30px" src="https://i.namu.wiki/i/hMfGFgmU4rk14_RweTTrgckKeHC_QoYBLsTFceW9YU4e-lX3GN5Vj6uPsoDjVZhrK5GhpdId3mXv2vYjIYpgPhgb2NshnrPs_1CYA_5jlN5hprQD2FdY6OHddta8D2dyKRcVPyO43PuVtcDHUJa4xQ.webp" alt="" />
        <a href="">{ item.user.name }</a>
      </h5>
      <pre>{ item.comment }</pre>
      <time dateTime={ item.createdAt }>{ item.createdAt }</time>
    </div>
  );
}

export default ReplyItem;