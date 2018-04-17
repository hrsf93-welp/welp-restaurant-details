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
  <div className="summary">
    <div className="today">
      <dl>
        <dt>Today</dt>
        <dd>{props.today.hoursOpen}
          <div className={(props.today.isOpen === 'Open now') ? 'isOpen-true' : 'isOpen-false'}> {props.today.isOpen}</div>
        </dd>
      </dl>
    </div>
    <div className="full-menu"><dl><dt>Full Menu</dt></dl></div>
    <div className="price"><dl><dt>Price Range</dt><dd>{Prices[props.price]}</dd></dl></div>
  </div>
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
