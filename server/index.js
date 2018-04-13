const express = require('express');
const app = express();

app.set('port', 3002);

app.use(express.static(__dirname + '/../client/dist'));

app.listen(app.get('port'), 
  console.log(`Listening on ${app.get('port')}`));
