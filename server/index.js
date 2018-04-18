const express = require('express');
const path = require('path');
const Restaurants = require('./Restaurants');

const app = express();

app.set('port', 3002);

app.use(express.static(path.join(__dirname, '/../public')));

app.listen(app.get('port'), console.log(`Listening on ${app.get('port')}`));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/api/details/:id', (req, res) => {
  Restaurants.find({ id: req.params.id }, (err, result) => {
    res.send(result);
  });
});
