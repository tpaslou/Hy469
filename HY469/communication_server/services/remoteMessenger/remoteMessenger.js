/**
 * This is the web socket server where the clients (Web pages) - devices connect .
 */

const WebSocket = require('ws');
const config = require('../../config/config');

/**
 * A class that repsesents the websocket server for connection  with clients
 */
class RemoteMessenger {

    constructor(port) {
        this.port = port;

        //creating new websocket server
        this.wss = new WebSocket.Server({ port: port }, () => {
            console.log(`UI Websocket is listeninng at port ${port}`);
        });

        this.clients = [];

        //when a client connects...
        this.wss.on('connection', (ws) => {
            console.log(`new connection established with ui client with type: ${ws.protocol}`);

            //add new client to an array to keep track and manage them
            this.clients.push({
                type: ws.protocol,
                ws: ws
            });

            //code when closing the connection
            ws.on('close', (wsNum) => {
                //find the client in the array
                var cl = this.clients.find(c => c.ws == ws);

                //remove client from array
                this.clients.splice(this.clients.indexOf(cl), 1);

                console.log(`ui client with type ${cl.type} disconnected`);
            });

            //code when receiving a message via socket connection from a ui client
            ws.on('message', (message) => {
                console.log('received a message from the ui client with type %s: %s', ws.protocol, message);
            });
        }); 
    }

    
    /**
     * 
     * Send a message to the clients - you can set filters in order to send to specific devices
     * 
     * @param {string} type - the message type (id/channel)
     * @param {*} message - the data to be sent
     * @param {(string|string[])=} deviceTypes - specific devices to send the message
     */
    sendMessage(type, message, deviceTypes) {
        var clients2Send = this.clients;

        var object2Send = {
            type: type,
            message: message
        };

        var message2Send = JSON.stringify(object2Send);

        if (Array.isArray(deviceTypes) && deviceTypes.length > 0)
            clients2Send.filter(cl => deviceTypes.includes(cl.type));

        if (typeof (deviceTypes) === 'string')
            clients2Send.filter(cl => deviceTypes == cl.type);

        clients2Send.forEach(cl => cl.ws.send(message2Send));
    }

}

var uiSocket = new RemoteMessenger(config.remoteMessengerPort);

module.exports = uiSocket;