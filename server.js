const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

require('./api/router')(app);

app.listen(3500, function () {
    console.log('se inició el servidor en port 3500');
})
