$(document).ready(function(){
    var currPPTSlide = 0;
    var annBoolean = 0;
    /* Video Controls: Mute / Unmute Button */
    $('#SwapMuteBtn').click(function () {
        var myVideo = document.getElementById("PPTVideo");
        if ($('#MuteUnmuteImg').attr('src') == "../Images/Buttons/Button_Mute.png") {
            $('#MuteUnmuteImg').attr('src', '../Images/Buttons/Button_Unmute.png'); 
            myVideo.muted = true;
        }
        else{
            $('#MuteUnmuteImg').attr('src', '../Images/Buttons/Button_Mute.png'); 
            myVideo.muted = false;
        }
    });

    $('#PlayPauseBtn').click(function () {
        var myVideo = document.getElementById("PPTVideo"); 
        if (myVideo.paused) 
            myVideo.play(); 
        else 
            myVideo.pause();
    });

    /* Side Panel: Previous Button */
    $('#PreviousBtn').click(function(){
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
    });

    /* Side Panel: Next Button */
    $('#NextBtn').click(function(){
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
    });

    //-------------Take Notes-------------------
    $('#TakeNotesBtn').click(function(){
        $('#NotesPanel').show();
        $('#MainPanel').hide();
        $('#ParticipantsPanel').hide();
        $('#SettingsPanel').hide();
    });

        //-------------Take Notes-------------------
        $('#TakeAnnotationBtn').click(function(){
            if(annBoolean==0){
                $('#VideoAnnotation').show();
                annBoolean = 1;
            }else{
                $('#VideoAnnotation').hide();
                annBoolean = 0;
            }
            
        });
    
});