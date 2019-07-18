const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', function(req , res) {
    res.send('Hello World2!')
});


app.listen(3500, function () {
    console.log('se inició el servidor en port 3500');
})
