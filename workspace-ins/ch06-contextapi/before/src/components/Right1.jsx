import Right2 from '@components/Right2';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

Right1.propTypes = {
  countUp: PropTypes.func
};

function Right1({ countUp }) {
  useEffect(()=>{
    console.log('## Right1 렌더링.');
  });
  return (
    <div>
      <h1>Right1</h1>
      <Right2 countUp={ countUp } />
    </div>
  );
}

export default Right1;