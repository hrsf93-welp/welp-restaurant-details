import React from 'react';

const MenuSingleItem = props => {
  return (
      <div>
        <h3>{props.menuItem.name}</h3>
        <h4>{props.menuItem.description}</h4>
        <img src={props.menuItem.photoUrls[0]} height="300px" width="450px"></img>
      </div>
  );
};

export default MenuSingleItem;
