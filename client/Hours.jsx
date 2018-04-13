import React from 'react';
import EXAMPLE_RESTAURANT from '../data/exampleSingleEntryRestaurantInfo';

class Hours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openNow: false,
    };
  }

  render() {
    return (
      <div>
        <h4>Open Now: {this.state.openNow}</h4>
        <ul>
          { Object.keys(EXAMPLE_RESTAURANT.hours).map(day => (
            <li key={day}>{day}: {EXAMPLE_RESTAURANT.hours[day]}</li>))
          }
        </ul>
      </div>
    );
  }
}

export default Hours;
