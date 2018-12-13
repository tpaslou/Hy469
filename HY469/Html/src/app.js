$(document).ready(function () {

  if (GlobalConfig.ConnectToServer) {
    //Start sockets' connections
    Sockets.Connect();
  }

});
