var connection = require('../app/helloWorld/connection');
var DEVICES = require("../../communication_server/services/devices");
//var Http =  require("../../Js/http.controller")

var io = require('socket.io')({
    transports: ['websocket'],
});
io.attach(4567);
 
io.on('connection', function(socket){
    console.log("HoloLens Connected");
    //--------Annotations--------------
    socket.on('Annotation',function(){
        console.log('Annotation event received');
        connection.sendHelloWold("Annotation",DEVICES.TABLET);
    });
    socket.on('AnnotationRed',function(){
        console.log('AnnotationRed event received');
        connection.sendHelloWold("AnnotationRed",DEVICES.TABLET);
    });
    socket.on('AnnotationGreen',function(){
        console.log('AnnotationGreen event received');
        connection.sendHelloWold("AnnotationGreen",DEVICES.TABLET);
    });
    socket.on('AnnotationBlack',function(){
        console.log('AnnotationBlack event received');
        connection.sendHelloWold("AnnotationBlack",DEVICES.TABLET);
    });
    socket.on('AnnotationRequest',function(){
        connection.sendHelloWold("AnnotationRequest",DEVICES.TABLET);
    });
    //--------Presentation--------------
    socket.on('NextSlide',function(){
        connection.sendHelloWold("NextSlide",DEVICES.TABLET);
    });
    socket.on('PreviousSlide',function(){
        connection.sendHelloWold("PreviousSlide",DEVICES.TABLET);
    });
    //--------Video--------------
    socket.on('PlayPauseVideo',function(){
        connection.sendHelloWold("PlayPauseVideo",DEVICES.TABLET);
    });
});

console.log('Hololens Server started');