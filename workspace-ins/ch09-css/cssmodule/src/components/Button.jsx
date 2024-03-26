import PropTypes from 'prop-types';
import styles from './Button.module.css';

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

function Button({ children, color='gray', backgroundColor='white' }){
  return <button className={ `${styles['rounded-button']} ${styles['button-'+color]} ${styles['button-bg-'+backgroundColor]}` }>{ children }</button>;
}

export default Button;