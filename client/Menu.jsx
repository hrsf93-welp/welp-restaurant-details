import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => (
  <div className="menu">
    <h3>Menu</h3>
    <dl>{props.menu[0].name}</dl>
    <dl>{props.menu[1].name}</dl>
    <dl>{props.menu[2].name}</dl>
  </div>
);

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default Menu;
