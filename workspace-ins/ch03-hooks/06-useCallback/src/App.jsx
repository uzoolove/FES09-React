import { useState } from "react";
import Payment from "./Payment";
import Product from "./Product";

function App(){
  const price = 12000;
  const defaultShippingFees = 3000;
  const [quantity, setQuantity] = useState(1);
  const [shippingFees, setShippingFees] = useState(defaultShippingFees);

  // 수량이 변경될 때 배송비 다시 계산
  const handleChange = e => {
    const newQuantity = e.target.value;
    setShippingFees(defaultShippingFees * Math.ceil(newQuantity / 5));
    setQuantity(newQuantity);
  };

  const handleClick = () => {
    alert(`${price * quantity + shippingFees}원 결제 하시겠습니까?`);
    // 결제 로직...

  };

  return (
    <>
      <h1>useCallback - 함수를 memoization</h1>
      <Product price={ price } />

      <h2>수량 선택</h2>
      <div>
        가격: { price }원<br/>
        수량: <input type="number" min="1" value={ quantity } 
          onChange={ handleChange } /><br/>
        상품 가격: { price * quantity }<br/>
      </div>

      <Payment price={ price } quantity={ quantity } 
        shippingFees={ shippingFees } handleClick={ handleClick }/>
    </>
  );
}

export default App;