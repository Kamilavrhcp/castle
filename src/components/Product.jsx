import React from 'react';
import "../App.css";
import { BsHeart } from 'react-icons/bs';
import Button from "../components/Button";
import PropTypes from "prop-types";


const Product = (props) => {
  return (
    <div>
      <header className="Header">
        <BsHeart className="Heart"/>
        <h1 className="Store">{props.store}</h1>
      </header>
      <body>
      <img src={props.tshirt} alt={props.descriptionAlt} width="150" height="150"></img>
        <p className="Font"> <b>{props.description}</b></p>
      </body>
      <div>
      <p className="PreviousPrice">
        <p>De <s>R$ {props.fullPrices}</s></p>
      </p>
        <div className="CurrentPrice">
          <h1>{props.currentPrice}</h1>
          <img src={props.icon} alt="icone rosa prime" width="50" height="35"></img>
        </div>
        <div className="Price">
        <p>
          <b><font color="#00d316">1x</font>
          </b> <font color="gray">de</font>
          <b> R$19,90</b>
        </p>
        </div>
      </div>
        <Button buttonName="COMPRAR" />
        <div className="Footer">
        <p>Não sócio: <strong>R$ {props.fullPrices}</strong></p>
        </div>
  </div>
  );
}


export default Product;

Product.propTypes = {
  store: PropTypes.string,
  description: PropTypes.string,
  fullPrices: PropTypes.string,
  preposition: PropTypes.string,
  currentPrice: PropTypes.string,
  icon: PropTypes.symbol,
  tshirt: PropTypes.symbol,
  installment: PropTypes.string,
  prepositionLowerCase: PropTypes.string,
  descriptionAlt: PropTypes.string,
}