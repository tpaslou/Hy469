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

    // Presentation Header Controls ---------------------------------------
    if(data.message == "Annotation"){
      TakeAnnotation();     
    }else if(data.message == "AnnotationRed"){
      AnnotationColor(0);
    }else if(data.message == "AnnotationGreen"){
      AnnotationColor(1);
    }else if(data.message == "AnnotationBlack"){
      AnnotationColor(2);
    }
    else if(data.message == "NextSlide"){      
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
    // Coordinator Requests ------------------------------------------------
    else if(data.message == "AnnotationRequest"){
      if(window.location.pathname == "/Html/Coordinator.html")
        AnnotationRequest();
    }
    else if(data.message == "ChangeFileRequest"){
      if(window.location.pathname == "/Html/Coordinator.html")
        ChangeFileRequest();
    }
    else if(data.message == "CoordinatorRequest"){
      if(window.location.pathname == "/Html/Coordinator.html")
        CoordinatorRequest();
    }
    else if(data.message == "JoinRequest"){
      if(window.location.pathname == "/Html/Coordinator.html")
        JoinRequest();
    }
    else if(data.message == "ParticipantOptionsRequest"){
      if(window.location.pathname == "/Html/Coordinator.html")
        ParticipantOptionsRequest();
    }
    else if(data.message == "HideParticipantPendingRequests"){
      HideParticipantPendingRequests();
    }
    else if(data.message == "ParticipantJoin"){
      ParticipantJoin();
    }
    else if(data.message == "AddJoinnedParticipant"){
      if(window.location.pathname == "/Html/Coordinator.html")
        LastUserStatus(true);
    }
    else if(data.message == "RemoveParticipant"){
        RemoveParticipant();
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