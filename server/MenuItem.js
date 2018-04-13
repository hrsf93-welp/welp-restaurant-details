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

const MenuItem = mongoose.model('Menu', menuItems);

module.exports = MenuItem;
