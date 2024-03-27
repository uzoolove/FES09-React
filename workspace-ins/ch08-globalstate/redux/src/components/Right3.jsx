// import counterActionCreator from '@redux/counterActionCreator';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { countDown, countReset, countUp } from '@redux-toolkit/counterSlice';

function Right3() {
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });
  return (
    <div>
      <h1>Right3</h1>

      {/*react toolkit*/}
      <button onClick={ () => dispatch(countDown(2)) }>-</button>
      <button onClick={ () => dispatch(countReset()) }>0</button>
      <button onClick={ () => dispatch(countUp(1)) }>+</button>
    

      {/* <button onClick={ () => dispatch(counterActionCreator.countDown(2)) }>-</button>
      <button onClick={ () => dispatch(counterActionCreator.countReset()) }>0</button>
      <button onClick={ () => dispatch(counterActionCreator.countUp(1)) }>+</button> */}
    </div>
  );
}

export default Right3;