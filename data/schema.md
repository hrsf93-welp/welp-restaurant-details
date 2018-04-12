
<!-- Menu Items -->
var menuItems = new Schema({
	id: String,
	businessId: Number,
	name: String,
	description: String,
	category: String,
	reviewCount: Number, _is this needed?_
	reviewUrls: [String], _or alternatively Ids (Greg)_
	photoCount: Number, _is this needed?_
	photoUrls: [String], _or alternatively Ids (Dylan)_
})

<!-- Restaurant Details -->
var restDetails = new Schema({
	_id: Number,
	hours: {
		monday: String,
		tuesday: String,
		wednesday: String,
		thursday: String,
		friday: String,
		saturday: String,
		sunday: String
	},
	attributes: {
		restaurantsTableService: Boolean,
		goodForMeal: {
			dessert: Boolean,
			latenight: Boolean,
			lunch: Boolean,
			dinner: Boolean,
			breakfast: Boolean,
			brunch: Boolean
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
			casual: Boolean
		},
		restaurantsTakeOut: Boolean,
		goodForKids: Boolean,
		businessParking: {
			garage: Boolean,
			street: Boolean,
			validated: Boolean,
			lot: Boolean,
			valet: Boolean
		}
  },
})
