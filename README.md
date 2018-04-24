# welp-restaurant-details

A service provided to a parent Yelp restaurant page.
Contains 4 major sub-components: 
1. Summary component
2. Hours component that renders based off of the time the site is viewed
3. Menu component that is clickable with photos and reviews
4. Details component that displays more information about the restaurant

## Related Projects

  - https://github.com/zhujohnny/welp-hrsf93-front-end-capstone
  - https://github.com/hrsf93-welp/welp-restaurant-summary
  - https://github.com/hrsf93-welp/welp-photo-gallery
  - https://github.com/hrsf93-welp/welp-review

## Table of Contents

1. [Requirements](#Requirements)
2. [Installing Dependencies](#Installing-Dependencies)
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