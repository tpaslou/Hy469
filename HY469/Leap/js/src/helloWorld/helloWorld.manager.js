
var HelloWorldManager = function () {

    /**
    * A class to manage the messages received from helloWorld
    */
    class HelloWorld {
        /**
         * 
         * @param {object} data 
         * @param {} data.type 
         * @param {} data.message 
         */
        DataHandler(data) {
            if (data.type === "helloWorld") {
                this.HelloMessage(data.message);
            }

        }

        HelloMessage(message) {
            $('#mesasgeBox').text(message);
        }
    }

    return new HelloWorld();
}();