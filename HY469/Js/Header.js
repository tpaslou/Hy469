$(document).ready(function(){
    var currPPTSlide = 0;
    var annotations = 0;
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
        $('#FileSystemPanel').hide();
    });
    $('#ChangePPTBtn').click(function(){
        $('#FileSystemPanel').show();
        $('#MainPanel').hide();
        $('#ParticipantsPanel').hide();
        $('#SettingsPanel').hide();
        $('#NotesPanel').hide();
    });

        //-------------Take Notes-------------------
        $('#TakeAnnotationBtn').click(function(){
            if(annotations==0){
                $('#VideoAnnotationRed').show();
                $('#VideoAnnotationGreen').hide();
                $('#VideoAnnotationBlack').hide();
                annotations = 1;
            }else{
                $('#VideoAnnotationRed').hide();
                $('#VideoAnnotationGreen').hide();
                $('#VideoAnnotationBlack').hide();
                annotations = 0;
            }

        });

        $('#ColorRedBtn').click(function(){
            if(annotations==1){
                $('#VideoAnnotationRed').show();
                $('#VideoAnnotationGreen').hide();
                $('#VideoAnnotationBlack').hide();
            }
        });

        $('#ColorGreenBtn').click(function(){
            if(annotations==1){
                $('#VideoAnnotationRed').hide();
                $('#VideoAnnotationGreen').show();
                $('#VideoAnnotationBlack').hide();
            }
        });

        $('#ColorBlackBtn').click(function(){
            if(annotations==1){
                $('#VideoAnnotationRed').hide();
                $('#VideoAnnotationGreen').hide();
                $('#VideoAnnotationBlack').show();
            }
        });
    
});