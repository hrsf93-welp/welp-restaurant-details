# welp-restaurant-details

A functional Yelp restaurant page that shows detailed restaurant information, reviews and photos.
For this project, I built the right sidebar that contains 3 main components: 
1. hours component that renders based off of the time the site is viewed
2. menu component that is clickable with photos and reviews
3. restaurant details component that displays more information about the restaurant

## Related Projects

  - https://github.com/hrsf93-welp/welp-restaurant-summary
  - https://github.com/hrsf93-welp/welp-photo-gallery
  - https://github.com/hrsf93-welp/welp-review

## Table of Contents

1. [Requirements](#Requirements)
2. [Installing Dependencies](#InstallingDependencies)
3. [Development](#Development)
4. [Usage](#Usage)

## Requirements

* __Note:__ Nodemon, Webpack and Mongo can be installed globally:
```sh
npm install -g nodemon
npm install -g webpack
npm install -g mongo
```
### Installing Dependencies

From within the root directory:

```sh
npm install
npm run build
```

## Development

To run locally you'll need to import the database using these commands:

```sh
mongod
mongo
mongoimport --db welp --collection restaurants --file ./spec/data/exampleDataRestaurantInfo.json

```

## Usage

From within the root directory:
```sh
npm start
```
In a browser navigate to localhost:3002