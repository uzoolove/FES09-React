import PropTypes from 'prop-types';
import { memo } from 'react';

Product.propTypes = {
  price: PropTypes.number.isRequired
};

const Product = memo(function Product({ price }){
  console.log('Product 호출됨.');
  return (
    <>
      <h2>상품 설명</h2>
      <p>상품명: 스키비디 토일렛</p>
      <p>가격: { price } 원</p>
      <p>상품 설명</p>
      <img src="https://market-lion.koyeb.app/api/files/sample-skibidi12.jpg" width="600" />
    </>
  );
});

export default Product;