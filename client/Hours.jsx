import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// TODO: Print days in order
// TODO: isBetween doesn't handle midnight correctly
// TODO: lookup timezone using Google API and latitude/longitude

const Hours = props => (
  <div>
    <table>
      <tbody>
        { Object.keys(props.hours).map((day) => {
          const formattedDay = day.charAt(0).toUpperCase() + day.slice(1);
          const open = moment(props.hours[day].split('-')[0], 'HH:mm');
          const close = moment(props.hours[day].split('-')[1], 'HH:mm');
          let isOpen = '';
          if (day === 'sunday') {
            isOpen = moment('14:00', 'HH:mm').isBetween(open, close) ? 'Open Now' : 'Closed';
          }
          return (
            <tr key={day}>
              <td>{formattedDay}</td>
              <td>{`${open.format('h:mm a')} -${close.format('h:mm a')}`}</td>
              <td>{isOpen}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

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
