/**
 * 
 * Here you can add all the different functions repsesenting the messages that you will be sending to the clients (Web pages) under the helloWorld 'class'
 * 
 */

var remoteMessenger = require('../../services/remoteMessenger/remoteMessenger');
const MESSAGE_TYPES = require('../../services/messageTypes');

exports.sendHelloWold = (message, deviceTypes) => {
    remoteMessenger.sendMessage(MESSAGE_TYPES.HELLOWORLD, message, deviceTypes);
}
