import React from 'react';
import EXAMPLE_MENU_ITEMS from '../spec/data/exampleMenuItems';

const MenuSingleItem = props => {
  return (
      <div>
        <h3>{EXAMPLE_MENU_ITEMS[props.index].name}</h3>
        <h4>{EXAMPLE_MENU_ITEMS[props.index].description}</h4>
        <img src={EXAMPLE_MENU_ITEMS[props.index].photoUrls[0]} height="300px" width="450px"></img>
      </div>
  );
};

export default MenuSingleItem;
