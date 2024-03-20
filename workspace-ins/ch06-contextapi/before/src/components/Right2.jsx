import Right3 from '@components/Right3';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

Right2.propTypes = {
  countUp: PropTypes.func
};

function Right2({ countUp }) {
  useEffect(()=>{
    console.log('### Right2 렌더링.');
  });
  return (
    <div>
      <h1>Right2</h1>
      <Right3 countUp={ countUp } />
    </div>
  );
}

export default Right2;