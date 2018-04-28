const Restaurants = require('./Restaurants');
const Menus = require('./Menus');
const MenusData = require('./MenusData.js');
const RestaurantsData = require('./RestaurantsData.js');

Menus.collection.drop();
Menus.collection.insertMany(MenusData);

Restaurants.collection.drop();
Restaurants.collection.insertMany(RestaurantsData);