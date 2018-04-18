import React from 'react';
import PropTypes from 'prop-types';
import Raven from 'raven-js';
import axios from 'axios';
import Summary from './Summary';
import { Hours, HoursToday } from './Hours';
import Menu from './Menu';
import Details from './Details';

Raven
  .config('https://7f6edf48db67490fa3b5f0e72e26c6e9@sentry.io/1191135')
  .install();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: props.match.params.id,
      restaurantInfo: '',
      restaurantHoursToday: '',
      restaurantMenu: '',
    };
  }

  componentDidMount() {
    axios.get(`/api/details/${this.state.restaurantId}`)
      .then((response) => {
        this.setState({ restaurantInfo: response.data });
        this.setState({ restaurantHoursToday: HoursToday });
      })
      .catch((error) => {
        Raven.captureException(error);
      });
    // axios.get(`/api/menu/${this.state.restaurantId}`)
    //   .then((response) => {
    //     this.setState({ restaurantMenu: response.data });
    //   })
    //   .catch((error) => {
    //     Raven.captureException(error);
    //   });
  }

  render() {
    const summary = this.state.restaurantInfo &&
      <Summary
        today={this.state.restaurantHoursToday}
        menu={this.state.restaurantInfo.menuUrl}
        price={this.state.restaurantInfo.attributes.restaurantsPriceRange2}
      />;

    const hours = this.state.restaurantInfo.hours &&
      <Hours hours={this.state.restaurantInfo.hours} />;

    const menu = this.state.restaurantMenu &&
      <Menu menu={this.state.restaurantMenu} />;

    const details = this.state.restaurantInfo.attributes &&
      <Details attributes={this.state.restaurantInfo.attributes} />;

    return (
      <div>
        <h2>{this.state.restaurantInfo.name}</h2>
        {summary}
        {hours}
        {menu}
        {details}
      </div>
    );
  }
}

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default App;
