//*******************************************
//  SOCKETS CONTROLLER
//*******************************************
var Sockets = (function () {


  function HandleMessages(e) {
    var data = jQuery.parseJSON(e.data);
    //data.type - the type of the message
    //data.message - the data sent from server

    //This function is called when receiving a message from the communication server. 
    //First you have to check the message type to find what message the server sent.
    //You can then call/write the appropriate code - it is recommended to create a seperate file for each type of messages
    //You can have a prefix for messages that handle same type of data and then dispatch them using the postfix (e.g. hello:message1 , hello:message2)

    var msgType = data.type;
    console.log('received a message ' + data.type);
    if (msgType.includes('helloWorld')) {
      HelloWorldManager.DataHandler(data);
    } else {
      console.log('received a message from server that i dont handle with type:' + data.type);
    }

    if (msgType.includes('kinect/speech')) {
      

    }


  }



  class WSConnection {

    constructor() {
      this.socketConnection = null;
    }

    /**
     * Connect to socket server
     */
    Connect() {
      this.socketConnection = new WebSocket(GlobalConfig.Connections.Sockets, GlobalConfig.DeviceType);

      this.socketConnection.onopen = function () {
        console.info("Sockets connected!");
      };

      this.socketConnection.onerror = function (error) {
        console.info('Sockets Error: ' + error);
      };


      this.socketConnection.onmessage = HandleMessages;
    }

    /**
     * Disconnect from socket server
     */
    Disconnect() {
      this.socketConnection.disconnect();
      console.info('Sockets disconnected!');
    }

    /**
     * Send message to socket server
     * 
     * @param {string} type - Type of message
     * @param {any} msg - Object to send as message  
     */
    SendMessage(type, msg) {
      this.socketConnection.send(JSON.stringify({
        type: type,
        message: msg
      }));
    }

  }

  return new WSConnection();
})();