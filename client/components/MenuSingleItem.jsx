import React from 'react';
import PropTypes from 'prop-types';

const MenuSingleItem = props => (
  <div className="menu-single-item">
    <h3>{props.menuItem.name}</h3>
    <p>{props.menuItem.description}</p>
    <img className="img-large" src={props.menuItem.photoUrls[0]} alt="" />
  </div>
);

MenuSingleItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
}.isRequired;

export default MenuSingleItem;
