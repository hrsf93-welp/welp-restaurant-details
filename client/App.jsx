import React from 'react';
import axios from 'axios';
import Summary from './Summary';
import { Today, Hours } from './Hours';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: 40,
      restaurantInfo: '',
      today: '',
    };
  }

  componentDidMount() {
    axios.get(`/api/details/${this.state.restaurantId}`)
      .then((response) => {
        this.setState({ restaurantInfo: response.data[0] });
        this.setState({ today: Today });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const summary = this.state.restaurantInfo ? (
      <Summary today={this.state.today} price={this.state.restaurantInfo.attributes.restaurantsPriceRange2} />
    ) : (
      <div>Summary not available</div>
    );

    const hours = this.state.restaurantInfo ? (
      <Hours hours={this.state.restaurantInfo.hours} />
    ) : (
      <div>Hours not available</div>
    );

    return (
      <div>
        <h3>{this.state.restaurantInfo.name}</h3>
        {summary}
        {hours}
      </div>
    );
  }
}

export default App;
