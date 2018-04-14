import React from 'react';
import PropTypes from 'prop-types';

class Hours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  render() {
    const openNow = this.state.isOpen ? (
      <h4>Open Now</h4>
    ) : (
      <h4>Not Open</h4>
    );

    return (
      <div>
        {openNow}
        <ul>
          { Object.keys(this.props.hours).map(day => (
            <li key={day}>{day}: {this.props.hours[day]}</li>))
          }
        </ul>
      </div>
    );
  }
}

Hours.propTypes = {
  hours: PropTypes.shape({
    monday: PropTypes.string,
    tuesday: PropTypes.string,
    friday: PropTypes.string,
    wednesday: PropTypes.string,
    thursday: PropTypes.string,
    sunday: PropTypes.string,
    saturday: PropTypes.string,
  }).isRequired,
};

export default Hours;
