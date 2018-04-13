const mongoose = require('mongoose');

const { Schema } = mongoose;

const menuItems = new Schema({
  id: Number,
  name: String,
  description: String,
  category: String,
  price: Number,
  reviewIds: [String],
  photoIds: [String],
});

const MenuItem = mongoose.model('Menu', menuItems);

module.exports = MenuItem;
