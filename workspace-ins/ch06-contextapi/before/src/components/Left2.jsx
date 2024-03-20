import Left3 from '@components/Left3';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

Left2.propTypes = {
  count: PropTypes.number
};

function Left2({ count }) {
  useEffect(()=>{
    console.log('### Left2 렌더링.');
  });
  return (
    <div>
      <h1>Left2</h1>
      <Left3 count={ count } />
    </div>
  );
}

export default Left2;