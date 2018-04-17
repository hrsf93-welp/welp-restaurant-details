import React from 'react';
import PropTypes from 'prop-types';

const Prices = {
  1: 'under $10',
  2: '$11-30',
  3: '$31-60',
  4: 'above $61',
};

// TODO: Link to Menu
// TODO: Images
const Summary = props => (
  <dl>
    <dt>Today</dt><dd>{props.today.hoursOpen} {props.today.isOpen}</dd>
    <dt>Full Menu</dt>
    <dt>Price Range</dt><dd>{Prices[props.price]}</dd>
  </dl>
);

Summary.propTypes = {
  today: PropTypes.shape({
    dayOfWeek: PropTypes.string,
    hoursOpen: PropTypes.string,
    isOpen: PropTypes.string,
  }),
  price: PropTypes.number,
}.isRequired;

export default Summary;
