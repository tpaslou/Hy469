var currPPTSlide = 0;
var annotations = 0;

var Coord = "/Html/Coordinator.html";
var PartTablet = "/Html/Participant.html";
var PartLaptop = "/Html/Laptop_Participant.html";
var PartMobile = "/Html/Mobile_Participant.html";
var TV = "/Html/TVScreen.html";

/* ---- START: TABLET : Coord + Participant */

/* ALSO: Redirects other devices to their proper functions */

function NextSlide(){
    if(window.location.pathname == Coord)
        console.log("OMG YASS");

    var myVideo = document.getElementById("PPTVideo");
    myVideo.pause();

    if(currPPTSlide == 0){
        ++currPPTSlide;
        $('#PPTVideoImg').attr('src', '../Images/VideoPresentation/PV_2.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_3.png'); 

    }
    else if(currPPTSlide == 1){
        ++currPPTSlide;
        $('#PPTVideoImg').attr('src', '../Images/VideoPresentation/PV_3.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_4.png'); 
    }  
    else if(currPPTSlide == 2){
        ++currPPTSlide;
        /*$('#PPTVideoImg').attr('src', '../Images/VideoPresentation/PV_4.png');*/ 
        $('#PPTVideoImg').hide(); 
        $('#PPTVideo').show(); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_5.png'); 
        
        $('#VideoControlsDiv').show();
    }  
    else if(currPPTSlide == 3){
        /* Do Nothing */ 
    }    
}

function PreviousSlide(){
    var myVideo = document.getElementById("PPTVideo");
    myVideo.pause();

    if(currPPTSlide == 0){
        /* Do Nothing */
    }
    else if(currPPTSlide == 1){
        --currPPTSlide;
        $('#PPTVideoImg').attr('src', '../Images/VideoPresentation/PV_1.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_2.png'); 
    }  
    else if(currPPTSlide == 2){
        --currPPTSlide;
        $('#PPTVideoImg').attr('src', '../Images/VideoPresentation/PV_2.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_3.png'); 
    }
    else if(currPPTSlide == 3){
        --currPPTSlide;
        $('#PPTVideoImg').show();           
        $('#PPTVideo').hide(); 
        $('#PPTVideoImg').attr('src', '../Images/VideoPresentation/PV_3.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_4.png'); 

        $('#VideoControlsDiv').hide();
    } 
}

function TakeAnnotation(){
    if(annotations==0){
        Http.SendHelloWorldMessage("AnnotationOn");
        $('#VideoAnnotationRed').show();
        $('#VideoAnnotationGreen').hide();
        $('#VideoAnnotationBlack').hide();
        annotations = 1;
    }else{
        Http.SendHelloWorldMessage("AnnotationOff");
        $('#VideoAnnotationRed').hide();
        $('#VideoAnnotationGreen').hide();
        $('#VideoAnnotationBlack').hide();
        annotations = 0;
    }
}

function AnnotationColor(color){
    if(annotations == 0)
        return;

    if(color == 0){
        $('#VideoAnnotationRed').show();
        $('#VideoAnnotationGreen').hide();
        $('#VideoAnnotationBlack').hide();
    } else if(color == 1){
        $('#VideoAnnotationRed').hide();
        $('#VideoAnnotationGreen').show();
        $('#VideoAnnotationBlack').hide();
    } else if(color == 2){
        $('#VideoAnnotationRed').hide();
        $('#VideoAnnotationGreen').hide();
        $('#VideoAnnotationBlack').show();
    }
}

// 0 : Play Pause Video
// 1 : Mute Video
// 2 : Unmute Video
function VideoControls(controlType){
    var myVideo = document.getElementById("PPTVideo"); 
    if(controlType == 0){      
        if (myVideo.paused) 
            myVideo.play(); 
        else 
            myVideo.pause();
    }
    else if (controlType == 1){
        myVideo.muted = true;
    }
    else if (controlType == 2){
        myVideo.muted = false;
    }
}

/* ---- END: TABLET : Coord + Participant */

/* ---- START: TABLET : Coord + Participant */