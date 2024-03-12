import PropTypes from 'prop-types';

Payment.propTypes = {
  shippingFees: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

function Payment({ shippingFees, handleClick }){
  console.log('Payment 호출됨.');
  return (
    <>
      <h2>금액</h2>      
      <div>배송비: { shippingFees }</div>
      <button type="button" onClick={ handleClick }>결제</button>
    </>
  );
}

export default Payment;