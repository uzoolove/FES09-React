import { useEffect } from 'react';
import PropTypes from 'prop-types';

Left3.propTypes = {
  count: PropTypes.number
};

function Left3({ count }) {
  useEffect(()=>{
    console.log('#### Left3 렌더링.');
  });
  return (
    <div>
      <h1>Left3 : { count }</h1>
    </div>
  );
}

export default Left3;