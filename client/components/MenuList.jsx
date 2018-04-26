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
        {this.state.restaurantMenu
          .filter(item => item.photoUrls.length)
          .map(item => (
            <div className="menu-item-container" key={item.name}>
              <img className="img-medium" src={item.photoUrls[0]} alt="" />
              <div className="text-box-container">
                <h4>{item.name}</h4>
                {item.description}
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

MenuList.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MenuList;
