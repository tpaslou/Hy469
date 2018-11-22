/**
 * 
 * This file is a websocket server where kinect and phidget sensors will send data when connected.
 * 
 */
const WebSocket = require('ws');

const config = require('../../config/config');

var remoteMessenger = require('../remoteMessenger/remoteMessenger');

const DEVICES = require('../devices');
const MESSAGE_TYPES = require('../messageTypes');

var wsServer;

function startServer(callback, port) {

    //startServer only once
    if (wsServer) return;

    //start server
    wsServer = new WebSocket.Server({ port: port }, function () {
        console.log("Websocket server for sensors started on port: " + port);
    });

    wsServer.on('connection', function (ws) {

        console.log(`client connected on ws server for sensors`);


        //callback that will be called whenever the client sends a message to the server
        ws.on('message', function incoming(message) {
            try {
                var jMessage = JSON.parse(message);
            } catch (e) {
                console.error("Sensors ws Server: Message received at the seonsors server froom a client is not in JSON format");
                return;
            }

            if (!jMessage.channel || !jMessage.message) {
                console.error("Sensors ws Server: Message received from a client not in the correct format (channel,message)");
                return;
            }

            callback(jMessage.channel, jMessage.message);
        });

        ws.on('close', function close() {
            console.log(`client disconnected from ws server for sensors`);
        });

    });

}


//bussiness logic for sensors / dispatcher +++
function sendMessage2UI(type, message) {

    //here you can write code where you can choose what you will do with the data of the sensors
    //filter & dispatch

    //example
    if(type == MESSAGE_TYPES.KINECT_GESTURE){
        console.log('a gesture was received!');
        //send to specific device or do smth
    }

    //send anything received from the sensor controller to the tv (example)
    remoteMessenger.sendMessage(type, message, DEVICES.TV);
}


startServer(sendMessage2UI, config.sensorSocketPort);

