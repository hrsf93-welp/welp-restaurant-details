import React from 'react';
import axios from 'axios';
import Hours from './Hours';

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

    return (
      <div>
        <div>{this.state.restaurantInfo.name}</div>
        {hours}
      </div>
    );
  }
}

export default App;
