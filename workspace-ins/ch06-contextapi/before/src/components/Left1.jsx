import Left2 from '@components/Left2';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

Left1.propTypes = {
  count: PropTypes.number
};

function Left1({ count }) {
  useEffect(()=>{
    console.log('## Left1 렌더링.');
  });
  return (
    <div>
      <h1>Left1</h1>
      <Left2 count={ count } />
    </div>
  );
}

export default Left1;