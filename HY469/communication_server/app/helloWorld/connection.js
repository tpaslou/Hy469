/**
 * 
 * Here you can add all the different functions repsesenting the messages that you will be sending to the clients (Web pages) under the helloWorld 'class'
 * 
 */
//o server to pernei edw kai to kanei broadcast edw
var remoteMessenger = require('../../services/remoteMessenger/remoteMessenger');
const MESSAGE_TYPES = require('../../services/messageTypes');
var holoConnection = require('../../services/HoloConnection');

exports.sendHelloWold = (message, deviceTypes) => {
    remoteMessenger.sendMessage(MESSAGE_TYPES.HELLOWORLD, message, deviceTypes);
}

