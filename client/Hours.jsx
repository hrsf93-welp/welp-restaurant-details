import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Today = {
  dayOfWeek: '',
  hoursOpen: '',
  isOpen: '',
};

const Hours = props => (
  <div>
    <table>
      <tbody>
        { ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((dayOfWeek) => {
          // TODO: lookup restaurant timezone using Google API and latitude/longitude
          const open = moment(`${props.hours[dayOfWeek].split('-')[0]} -0700'`, 'HH:mm Z').subtract(1, 'days');
          const close = (props.hours[dayOfWeek].split('-')[1].split(':')[0] <= 12) ?
            moment(`${props.hours[dayOfWeek].split('-')[1]} -0700'`, 'HH:mm Z') :
            moment(`${props.hours[dayOfWeek].split('-')[1]} -0700'`, 'HH:mm Z').subtract(1, 'days');
          const hoursOpen = (props.hours[dayOfWeek] === '0:00-0:00') ? '24/7' : `${open.format('h:mm a')} - ${close.format('h:mm a')}`;
          let isOpen = '';
          if (dayOfWeek === moment().format('dddd').toLowerCase()) {
            isOpen = moment().isBetween(open, close) ? 'Open now' : 'Closed now';
            Today.dayOfWeek = dayOfWeek;
            Today.hoursOpen = hoursOpen;
            Today.isOpen = isOpen;
          }
          return (
            <tr key={dayOfWeek}>
              <td>{dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}</td>
              <td>{hoursOpen}</td>
              <td>{isOpen}</td>
            </tr>
          );
          })
        }
      </tbody>
    </table>
  </div>
);

Hours.propTypes = {
  hours: PropTypes.shape({
    monday: PropTypes.string,
    tuesday: PropTypes.string,
    wednesday: PropTypes.string,
    thursday: PropTypes.string,
    friday: PropTypes.string,
    saturday: PropTypes.string,
    sunday: PropTypes.string,
  }).isRequired,
};

export { Today, Hours };
