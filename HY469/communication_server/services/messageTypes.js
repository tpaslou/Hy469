/**
 * 
 * Here you can define all the different types of messages that you will send from the server to the clients (wep pages)
 */
module.exports = {
    HELLOWORLD: 'helloWorld',


    //TYPES RECEIVED FROM SENSOR SERVER - SENT WITH THE SAME TYPE TO CLIENT
    SENSORS_DISTANCE: "sensors/distance",
    SENSORS_LIGHT: "sensors/light",
    SENSORS_LINEAR: "sensors/linear",
    SENSORS_ROTATION: "sensors/rotation",
    SENSORS_TOUCH: "sensors/touch",
    KINECT_MOVEMENT: "kinect/movement",
    KINECT_GESTURE: "kinect/gesture",
    KINECT_SPEECH: "kinect/speech",
    KINECT_ROTATION_Y: "kinect/rotationY",
    KINECT_POSITION: "kinect/position",
};