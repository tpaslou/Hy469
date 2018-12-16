var connection = require('./connection');

//-----------------HOLOLENS---------------------
var DEVICES = require("../../services/devices");
var io = require('socket.io')({
    transports: ['websocket'],
});
io.attach(4567);

io.on('connection', function(socket){
    socket.on('Annotation',function(){
        console.log('Annotation event received');
        socket.emit('Annotation');
    });
});

console.log('Hololens Server started');
//----------------------------------------------


// The main code for you remote function
exports.helloWorld = (req, res) => {

    //get parameters
    var message = req.body.message;

    //check if required parameters were sent.
    if (!message) {
        res.status(400).send('parameter message is missing');
        return;
    }

    console.log("hello " + message);

    //bussiness logic +++
    var myMessage = `a message was received: ${message}`;


    //if this call affects a device, you can send the message via the websocket using a function in the connection file
    connection.sendHelloWold(message,DEVICES.TV);

    //send a response
    res.send('i received and sent the message successfully');

};