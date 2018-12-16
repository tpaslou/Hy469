//*******************************************
//  SOCKETS CONTROLLER
//*******************************************
//EDW ta kanw receive
var Sockets = (function () {


  function HandleMessages(e) {
    var data = jQuery.parseJSON(e.data);
    //data.type - the type of the message
    //data.message - the data sent from server

    console.log(data.type);
    console.log(data.message);

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
    }else if(data.message == "Annotation"){
      TakeAnnotation();     
    }else if(data.message == "AnnotationRed"){
      AnnotationColor(0);
    }else if(data.message == "AnnotationGreen"){
      AnnotationColor(1);
    }else if(data.message == "AnnotationBlack"){
      AnnotationColor(2);
    }
    else if(data.message == "NextSlide"){
      console.log(window.location.pathname);
      NextSlide();
    }
    else if(data.message == "PreviousSlide"){
      PreviousSlide();
    }
    else if(data.message == "PlayPauseVideo"){
      VideoControls(0);
    }
    else if(data.message == "MuteVideo"){
      VideoControls(1);
    }
    else if(data.message == "UnmuteVideo"){
      VideoControls(2);
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