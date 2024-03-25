import PropTypes from 'prop-types';
import styles from './Button.module.css';

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

function Button({ children }){
  return <button className={ styles['rounded-button'] }>{ children }</button>;
}

export default Button;