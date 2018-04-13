const express = require('express');
const path = require('path');

const app = express();

app.set('port', 3002);

app.use(express.static(path.join(__dirname, '/../public')));

app.listen(app.get('port'), console.log(`Listening on ${app.get('port')}`));
