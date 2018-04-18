import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Summary from './Summary';
import { Today, Hours } from './Hours';
import Details from './Details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: props.match.params.id,
      restaurantInfo: '',
      today: {},
    };
  }

  componentDidMount() {
    axios.get(`/api/details/${this.state.restaurantId}`)
      .then((response) => {
        this.setState({ restaurantInfo: response.data[0] });
        this.setState({ today: Today });
      });
  }

  render() {
    const summary = this.state.restaurantInfo ?
      <Summary today={this.state.today} price={this.state.restaurantInfo.attributes.restaurantsPriceRange2} /> :
      <div>Summary not available</div>;

    const hours = this.state.restaurantInfo.hours ?
      <Hours hours={this.state.restaurantInfo.hours} /> :
      <div>Hours not available</div>;

    const details = this.state.restaurantInfo ?
      <Details attributes={this.state.restaurantInfo.attributes} /> :
      <div>More Business Info not available</div>;

    return (
      <div>
        <h2>{this.state.restaurantInfo.name}</h2>
        {summary}
        <h3>Hours</h3>
        {hours}
        <h3>More Business Info</h3>
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
