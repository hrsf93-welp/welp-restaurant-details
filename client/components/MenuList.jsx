import React from 'react';
import axios from 'axios';

class MenuList extends React.Component {

  componentDidMount() {
    // axios.get(`/api/menu/${this.state.restaurantId}`)
    //   .then((response) => {
    //     this.setState({ restaurantMenu: response.data });
    //   })
    //   .catch((error) => {
    //     Raven.captureException(error);
    //   });
  }

  render() {
    return (
      <div>
        <h3>Menu</h3>
        {this.props.menu.map(item => (
          <div key={item.name}>
            <h4>{item.name}</h4>
            {item.photoUrls.map(url => <img key={url.slice(-6,-4)} src={url} height="50px" width="50px"></img>)}
          </div>
        ))}
      </div>
    );
  }
}

export default MenuList;
