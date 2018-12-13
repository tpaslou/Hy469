//*******************************************
//  SOCKETS CONTROLLER
//*******************************************
//EDW ta kanw receive
var Sockets = (function () {


  function HandleMessages(e) {
    var data = jQuery.parseJSON(e.data);
    //data.type - the type of the message
    //data.message - the data sent from server
    if(data.message == "TakeNotes"){
      $('#NotesPanel').show();
      $('#MainPanel').hide();
      $('#ParticipantsPanel').hide();
      $('#SettingsPanel').hide();
      $('#FileSystemPanel').hide();
    }else if(data.message == "ChangePPT"){
      $('#FileSystemPanel').show();
      $('#MainPanel').hide();
      $('#ParticipantsPanel').hide();
      $('#SettingsPanel').hide();
      $('#NotesPanel').hide();
    }else if(data.message == "AnnotationOn"){
      //see annotations = 0 and 1 here (how to change those)
      $('#VideoAnnotationRed').show();
      $('#VideoAnnotationGreen').hide();
      $('#VideoAnnotationBlack').hide();
    }else if(data.message == "AnnotationOff"){
      $('#VideoAnnotationRed').hide();
      $('#VideoAnnotationGreen').hide();
      $('#VideoAnnotationBlack').hide();
    }else if(data.message == "AnnotationRed"){
      $('#VideoAnnotationRed').show();
      $('#VideoAnnotationGreen').hide();
      $('#VideoAnnotationBlack').hide();
    }else if(data.message == "AnnotationGreen"){
      $('#VideoAnnotationRed').hide();
      $('#VideoAnnotationGreen').show();
      $('#VideoAnnotationBlack').hide();
    }else if(data.message == "AnnotationBlack"){
      $('#VideoAnnotationRed').hide();
      $('#VideoAnnotationGreen').hide();
      $('#VideoAnnotationBlack').show();
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