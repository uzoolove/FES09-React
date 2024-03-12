import PropTypes from 'prop-types';

Payment.propTypes = {
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  shippingFees: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

function Payment({ price, quantity, shippingFees, handleClick }){
  return (
    <>
      <h2>금액</h2>
      <div>상품 가격: { price * quantity }</div>
      <div>배송비: { shippingFees }</div>
      <div>결제 예정 금액: { price * quantity + shippingFees }</div>
      <button type="button" onClick={ handleClick }>결제</button>
    </>
  );
}

export default Payment;