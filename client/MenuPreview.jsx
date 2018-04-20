import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import MenuSingleItem from './MenuSingleItem';
import MenuList from './MenuList';

class MenuPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItemModalOpen: false,
      menuItemIndex: 0,
      menuFullModalOpen: false,
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleItemClick(menuItemIndex) {
    this.setState({
      menuItemModalOpen: !this.state.menuItemModalOpen,
      menuItemIndex,
    });
  }

  handleMenuClick() {
    this.setState({
      menuFullModalOpen: !this.state.menuFullModalOpen,
    });
  }

  render() {
    return (
      <div className="menu">
        <h3>Menu</h3>
        {this.props.menu.slice(0, 3).map((item, index) => (
          <div key={item.name}>
            <dl onClick={() => this.handleItemClick(index)}>
              <img src={item.photoUrls[0]} height="50px" width="50px"></img>
              {item.name}
            </dl>
          </div>
          ))}
        <Modal show={this.state.menuItemModalOpen}
          onClose={() => this.handleItemClick(0)}>
          <MenuSingleItem index={this.state.menuItemIndex} />
        </Modal>
        <dl className="fullMenu" onClick={this.handleMenuClick}>View the full menu</dl>
        <Modal show={this.state.menuFullModalOpen}
          onClose={() => this.handleMenuClick()}>
          <MenuList />
        </Modal>
      </div>
    )
  }

} 

MenuPreview.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default MenuPreview;
