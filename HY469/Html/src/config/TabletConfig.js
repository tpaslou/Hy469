//*******************************************
//  Global System Configurations
//*******************************************


var GlobalConfig = (function () {
  var ConnectToServer = true; //true/false 

  var DeviceType = "tablet";

  var serverIP = '192.168.1.14';

  var Connections = {
    Sockets: `ws:${serverIP}:8123`, // URL of socket server
    Http : `http://${serverIP}:8760` // URL of http - rest server
  };

  var Pages = {
    InitialPage: 'page1'     // initial page to display
  };


  return {
    ConnectToServer: ConnectToServer,
    Connections: Connections,
    Pages: Pages,
    DeviceType: DeviceType
  }
})();
