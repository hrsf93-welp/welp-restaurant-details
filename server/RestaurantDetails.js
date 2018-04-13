const mongoose = require('mongoose');

const { Schema } = mongoose;

const restaurantDetails = new Schema({
  _id: Number,
  hours: {
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String,
  },
  attributes: {
    restaurantsTableService: Boolean,
    goodForMeal: {
      dessert: Boolean,
      latenight: Boolean,
      lunch: Boolean,
      dinner: Boolean,
      breakfast: Boolean,
      brunch: Boolean,
    },
    alcohol: String,
    caters: Boolean,
    hasTV: Boolean,
    restaurantsGoodForGroups: Boolean,
    noiseLevel: String,
    wiFi: String,
    restaurantsAttire: String,
    restaurantsReservations: Boolean,
    outdoorSeating: Boolean,
    businessAcceptsCreditCards: Boolean,
    restaurantsPriceRange2: Number,
    bikeParking: Boolean,
    restaurantsDelivery: Boolean,
    ambience: {
      romantic: Boolean,
      intimate: Boolean,
      classy: Boolean,
      hipster: Boolean,
      divey: Boolean,
      touristy: Boolean,
      trendy: Boolean,
      upscale: Boolean,
      casual: Boolean,
    },
    restaurantsTakeOut: Boolean,
    goodForKids: Boolean,
    businessParking: {
      garage: Boolean,
      street: Boolean,
      validated: Boolean,
      lot: Boolean,
      valet: Boolean,
    },
  },
});

const Restaurants = mongoose.model('Restaurants', restaurantDetails);

module.exports = Restaurants;
