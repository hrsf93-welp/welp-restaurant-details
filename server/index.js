const express = require('express');
const path = require('path');
const Restaurants = require('./Restaurants');

const app = express();

app.set('port', 3002);
app.listen(app.get('port'));

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/api/details/:id', (req, res) => {
  Restaurants.find({ id: req.params.id }, (err, result) => {
    res.send(result);
  });
});
