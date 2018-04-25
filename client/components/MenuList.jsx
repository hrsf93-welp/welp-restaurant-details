import React from 'react';
import PropTypes from 'prop-types';
import Raven from 'raven-js';
import axios from 'axios';

class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantMenu: '',
    };
  }
  componentDidMount() {
    axios.get(`http://127.0.0.1:3002/api/menu/${this.props.restaurantId}`)
      .then((response) => {
        this.setState({ restaurantMenu: response.data });
      })
      .catch((error) => {
        Raven.captureException(error);
      });
  }

  render() {
    if (!this.state.restaurantMenu) { return ''; }
    return (
      <div className="menu-list">
        <h3>Menu</h3>
        {this.state.restaurantMenu.map(item => (
          <div key={item.name}>
            <h4>{item.name}</h4>
            {item.photoUrls.map(url => <img className="img-small" key={url.slice(-6, -4)} src={url} alt="" />)}
          </div>
        ))}
      </div>
    );
  }
}

MenuList.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MenuList;
