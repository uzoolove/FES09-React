import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
};

function Button({ children, bgColor }){

  return <button className={`bg-${bgColor}-500 text-white font-semibold px-2 py-1 ml-2 text-base hover:bg-blue-600 rounded`}>{ children }</button>
}

export default Button;