var currPPTSlide = 0;
var annotations = 0;

function NextSlide(){
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
// 1 : Mute Unmute Video
function VideoControls(controlType){
    if(controlType == 0){
        var myVideo = document.getElementById("PPTVideo"); 
        if (myVideo.paused) 
            myVideo.play(); 
        else 
            myVideo.pause();
    }
    else{
        if ($('#MuteUnmuteImg').attr('src') == "../Images/Buttons/Button_Mute.png") {
            $('#MuteUnmuteImg').attr('src', '../Images/Buttons/Button_Unmute.png'); 
            myVideo.muted = true;
        }
        else{
            $('#MuteUnmuteImg').attr('src', '../Images/Buttons/Button_Mute.png'); 
            myVideo.muted = false;
        }
    }
}

$(document).ready(function(){
    //here to connect with sockets
    if (GlobalConfig.ConnectToServer) {
        //Start sockets' connections
        Sockets.Connect();
      }
    
    $('#PlayPauseBtn').click(function () {
        Http.SendHelloWorldMessage("PlayPauseVideo");
        //VideoControls(0);
    });

    $('#SwapMuteBtn').click(function () {
        Http.SendHelloWorldMessage("MuteUnmuteVideo");
        //VideoControls(1);
    });

    

    /* Side Panel: Previous Button */
    $('#PreviousBtn').click(function(){
        Http.SendHelloWorldMessage("PreviousSlide");
        //PreviousSlide();
    });

    /* Side Panel: Next Button */
    $('#NextBtn').click(function(){
        Http.SendHelloWorldMessage("NextSlide");
        //NextSlide();
    });

    

    //-------------Take Notes-------------------
    $('#TakeNotesBtn').click(function(){
        Http.SendHelloWorldMessage("TakeNotes");
        $('#NotesPanel').show();
        $('#MainPanel').hide();
        $('#ParticipantsPanel').hide();
        $('#SettingsPanel').hide();
        $('#FileSystemPanel').hide();
    });
    $('#ChangePPTBtn').click(function(){
        Http.SendHelloWorldMessage("ChangePPT");
        $('#FileSystemPanel').show();
        $('#MainPanel').hide();
        $('#ParticipantsPanel').hide();
        $('#SettingsPanel').hide();
        $('#NotesPanel').hide();
    });

        //-------------Take Notes-------------------
        $('#TakeAnnotationBtn').click(function(){
            Http.SendHelloWorldMessage("Annotation");
            //TakeAnnotation();
        });

        $('#ColorRedBtn').click(function(){
            Http.SendHelloWorldMessage("AnnotationRed");
        });

        $('#ColorGreenBtn').click(function(){
            Http.SendHelloWorldMessage("AnnotationGreen");
        });

        $('#ColorBlackBtn').click(function(){
            Http.SendHelloWorldMessage("AnnotationBlack");
        });
    
});