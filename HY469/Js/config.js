//*******************************************
//  Global System Configurations
//*******************************************

var GlobalConfig = (function () {
  var DebugMode = false;     //true/false
  var ConnectToServer = true; //true/false

  var DeviceType = "tv";

  var serverIP = '127.0.0.1';

  var Connections = {
    Sockets: `ws://${serverIP}:8123/`, // URL of socket server
    Http: `http://${serverIP}:8760` // URL of http - rest server
  };

  var Pages = {
    InitialPage: 'page1'     // initial page to display
  };

  var Cursor = {
    Duration: 2500,          // How long to stay in btn in order to perform click (ms)
    LoadingStroke: 9,        // cursor design options
    LoadingColor: '#FFD800', // cursor design options
    HideTimeout : 250        //How long to stay if leap motion don't track the hand (ms)
  };

  return {
    DebugMode: DebugMode,
    ConnectToServer: ConnectToServer,
    Connections: Connections,
    Pages: Pages,
    Cursor: Cursor,
    DeviceType: DeviceType
  }
})();
