const mongoose = require('mongoose');

const { Schema } = mongoose;

const menuItems = new Schema({
  id: String,
  businessId: Number,
  name: String,
  description: String,
  category: String,
  reviewIds: [String],
  photoIds: [String],
});

const Menu = mongoose.model('Menu', menuItems);

module.exports = Menu;
