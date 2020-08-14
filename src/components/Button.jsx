import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Button({ className, outline, onClick, children }) {
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline,
      })}
      onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  outline: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
