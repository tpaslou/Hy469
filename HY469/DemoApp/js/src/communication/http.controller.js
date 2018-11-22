//*******************************************
//  HTTP REQUESTS CONTROLLER
//*******************************************
var Http = (function () {

  //Helper Functions
  var uri = GlobalConfig.Connections.Http;

  function PostRequest(postfix, data, callback) {
    console.log(`sending post request to ${uri}${postfix[0] == '/' ? '' : '/'}${postfix}`);
    $.post(`${uri}${postfix[0] == '/' ? '' : '/'}${postfix}`, data)
      .done((resultData) => {
        if (callback)
          callback(resultData);
      });
  }

  function GetRequest(postfix, data) {
    console.log(`sending get request to ${uri}/${postfix}`);
    $.get(`${uri}${postfix[0] == '/' ? '' : '/'}${postfix}`, data)
      .done((resultData) => {
        if (callback)
          callback(resultData);
      });
  }

  //END Helper Functions

  class HTTP_CLASS {


    /*----- REMOTE CALL FUNCTIONS -----*/
    /* Add any remote call functions you want to make to the communication server here */
    // DO NOT FORGET TO ADD THE FUNCTION IN THE RETURNING OBJECT 


    /**
     * Send message via http request to helloWorld
     * 
     * @param {string} message - message to send
     */
    SendHelloWorldMessage(message) {
      PostRequest(
        'helloWorld/',
        { message: message },
        (result) => {
          console.log("hello world message sent successfully");
        }
      );
    }



  }

  return new HTTP_CLASS();
})();
