import React from 'react';
import Hours from './Hours';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRestaurant: 'McDonald\'s',
    };
  }

  render() {
    return (
      <div>
        <div>{this.state.currentRestaurant}</div>
        <Hours />
      </div>
    );
  }
}

export default App;
