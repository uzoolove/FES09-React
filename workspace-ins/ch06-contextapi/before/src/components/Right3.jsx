import { useEffect } from 'react';
import PropTypes from 'prop-types';

Right3.propTypes = {
  countUp: PropTypes.func
};

function Right3({ countUp }) {
  useEffect(()=>{
    console.log('#### Right3 렌더링.');
  });
  return (
    <div>
      <h1>Right3</h1>
      <button onClick={ () => countUp(1) }>+</button>
    </div>
  );
}

export default Right3;