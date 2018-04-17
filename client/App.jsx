import React from 'react';
import axios from 'axios';
import Hours from './Hours';
import Details from './Details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: 40,
      restaurantInfo: '',
    };
  }

  componentDidMount() {
    axios.get(`/api/details/${this.state.restaurantId}`)
      .then((response) => {
        this.setState({ restaurantInfo: response.data[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const hours = this.state.restaurantInfo.hours ? (
      <Hours hours={this.state.restaurantInfo.hours} />
    ) : (
      <div>Hours not available</div>
    );

    const details = this.state.restaurantInfo.attributes ? (
      <Details attributes={this.state.restaurantInfo.attributes} />
    ) : (
      <div>More Business Info not available</div>
    );

    return (
      <div>
        <h2>{this.state.restaurantInfo.name}</h2>
        <h3>Hours</h3>
        {hours}
        <h3>More Business Info</h3>
        {details}
      </div>
    );
  }
}

export default App;
