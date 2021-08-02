import React from 'react';
import PropTypes from "prop-types";
import '../Css/Button.css'


const Button = (props) => {
  return <button onClick={() => alert('Agradecemos pela compra!')} className="button"> {props.buttonName} </button>;
};

export default Button;


Button.propTypes = {
  buttonName: PropTypes.string,
};