import PropTypes from 'prop-types';
import { memo } from 'react';

let beforeFn;

const Payment = memo(function Payment({ shippingFees, handleClick }){
  console.log('Payment 호출됨.');
  console.log(Object.is(beforeFn, handleClick));
  beforeFn = handleClick;
  return (
    <>
      <h2>금액</h2>      
      <div>배송비: { shippingFees }</div>
      <button type="button" onClick={ handleClick }>결제</button>
    </>
  );
});

Payment.propTypes = {
  shippingFees: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Payment;