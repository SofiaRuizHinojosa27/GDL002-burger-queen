import React from 'react';
import './Button.css';

const Button = props => {

  return (
    <button
      className={`Button ${props.extraClassName ? props.extraClassName : ''}`}
      onClick={props.action}
    >
      {props.name}
    </button>
  );
};

export default Button;
