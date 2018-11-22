/**
 * CS469 server index.js
 * The core file where the express service is initialized
 * 
 */


/* ---------------------------------------------------------------------------- */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
const cors = require('cors');
app.use(cors());

/* ---------------------------------------------------------------------------- */

var router = require('./app.routes');

var config = require('./config/config');

var sensorsSocket = require('./services/sensorSocket/sensors.socketConnection');

//add router file
router.addRoutes(app);

//start server
app.listen(config.restServerPort, () => {
    console.log(`REST server started listening at port ${config.restServerPort}`);
});

