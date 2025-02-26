var annotations = 0;
var currPPTSlide = 0;

var currPPTDefault = true;

var Coord = "/Html/Coordinator.html";
var PartTablet = "/Html/Participant.html";
var PartLaptop = "/Html/Laptop_Participant.html";
var PartMobile = "/Html/Mobile_Participant.html";
var TV = "/Html/TVScreen.html";

var LoginTablet = "/Html/LoginScreen.html";
var LoginLaptop = "/Html/Laptop_LoginScreen.html";


/* REDIRECT other devices to their proper functions */

function NextSlide(){
    if(currPPTSlide == 3)
        return;
       
    if(window.location.pathname == Coord || window.location.pathname == PartTablet)
        TabletNextSlide();
    else if(window.location.pathname == PartLaptop)
        LaptopNextSlide();
    else if(window.location.pathname == TV)
        TVNextPrevSlide(currPPTSlide + 1);
    else if(window.location.pathname == PartMobile)
        MobileNextSlide();

    ++currPPTSlide;
}

function PreviousSlide(){
    if(currPPTSlide == 0)
        return;
       
    if(window.location.pathname == Coord || window.location.pathname == PartTablet)
        TabletPreviousSlide();
    else if(window.location.pathname == PartLaptop)
        LaptopPreviousSlide();
    else if(window.location.pathname == TV)
        TVNextPrevSlide(currPPTSlide - 1);
    else if(window.location.pathname == PartMobile)
        MobilePreviousSlide();

    --currPPTSlide;
}

function ChangePPT(){
    currPPTDefault = !currPPTDefault;

    if(window.location.pathname == Coord || window.location.pathname == PartTablet)
        TabletChangePPT();
    else if(window.location.pathname == PartLaptop)
        LaptopChangePPT();
    else if(window.location.pathname == TV)
        TVNextChangePPT(currPPTSlide + 1);
    else if(window.location.pathname == PartMobile)
        MobileChangePPT();
}

function AllowPPTChangeParticipant(){
    // Currently features ONLY for tablet
    if(window.location.pathname == PartTablet)
    {
        $('#FileSystemPanel').show();
        $('#MainPanel').hide();
        $('#ParticipantsPanel').hide();
        $('#SettingsPanel').hide();
        $('#NotesPanel').hide();
    }
}

function TakeAnnotation(){
    if(annotations == 0)
        annotations = 1;
    else
        annotations = 0;

    if(window.location.pathname == Coord || window.location.pathname == PartTablet)
        TabletTakeAnnotation();
}

function AnnotationColor(color){
    if(window.location.pathname == Coord || window.location.pathname == PartTablet)
        TabletAnnotationColor(color);
}

// 0 : Play Pause Video
// 1 : Mute Video
// 2 : Unmute Video
function VideoControls(controlType){
    if(window.location.pathname == Coord || window.location.pathname == PartTablet)
        TabletVideoControls(controlType);
    else if(window.location.pathname == TV)
        TVVideoControls();
    else if(window.location.pathname == PartMobile)
        MobileVideoControls();
}

/* ---- START: TABLET : Coord + Participant */

function TabletNextSlide(){
    var myVideo = document.getElementById("PPTVideo");
    myVideo.pause();

    if(currPPTSlide == 0){
        $('#PPTVideoImg').attr('src', '../Images/VideoPresentation/PV_2.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_3.png'); 

    }
    else if(currPPTSlide == 1){
        $('#PPTVideoImg').attr('src', '../Images/VideoPresentation/PV_3.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_4.png'); 
    }  
    else if(currPPTSlide == 2){
        /*$('#PPTVideoImg').attr('src', '../Images/VideoPresentation/PV_4.png');*/ 
        $('#PPTVideoImg').hide(); 
        $('#PPTVideo').show(); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_5.png'); 
        
        $('#VideoControlsDiv').show();
    }  
}

function TabletPreviousSlide(){
    var myVideo = document.getElementById("PPTVideo");
    myVideo.pause();

    if(currPPTSlide == 1){
        $('#PPTVideoImg').attr('src', '../Images/VideoPresentation/PV_1.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_2.png'); 
    }  
    else if(currPPTSlide == 2){
        $('#PPTVideoImg').attr('src', '../Images/VideoPresentation/PV_2.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_3.png'); 
    }
    else if(currPPTSlide == 3){
        $('#PPTVideoImg').show();           
        $('#PPTVideo').hide(); 
        $('#PPTVideoImg').attr('src', '../Images/VideoPresentation/PV_3.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_4.png'); 

        $('#VideoControlsDiv').hide();
    } 
}

function TabletChangePPT(){   
    if(currPPTDefault){
        $('#PPTVideoImg').attr('src', '../Images/VideoPresentation/PV_1.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_2.png'); 
    }
    else{
        $('#PPTVideoImg').attr('src', '../Images/ChangePPT/PV_1.png'); 
        $('#NextSlideImg').attr('src', '../Images/ChangePPT/PV_2.png'); 
    }
}

function TabletTakeAnnotation(){
    if(annotations==1){
        Http.SendHelloWorldMessage("AnnotationOn");
        $('#VideoAnnotationRed').show();
        $('#VideoAnnotationGreen').hide();
        $('#VideoAnnotationBlack').hide();
    }else{
        Http.SendHelloWorldMessage("AnnotationOff");
        $('#VideoAnnotationRed').hide();
        $('#VideoAnnotationGreen').hide();
        $('#VideoAnnotationBlack').hide();
    }
}

function TabletAnnotationColor(color){
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

function TabletVideoControls(controlType){
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

/* ---- START: LAPTOP */

function LaptopNextSlide(){   
    if(currPPTSlide == 0){
        $('#LaptopCurrentPPTScreen').attr('src', '../Images/VideoPresentation/PV_2.png'); 
        $('#LaptopNextPPTScreen').attr('src', '../Images/VideoPresentation/PV_3.png'); 

    }
    else if(currPPTSlide == 1){
        $('#LaptopCurrentPPTScreen').attr('src', '../Images/VideoPresentation/PV_3.png'); 
        $('#LaptopNextPPTScreen').attr('src', '../Images/VideoPresentation/PV_4.png'); 
    }  
    else if(currPPTSlide == 2){
        $('#LaptopCurrentPPTScreen').attr('src', '../Images/VideoPresentation/PV_4.png');
        //$('#PPTVideoImg').hide(); 
        //$('#PPTVideo').show(); 
        $('#LaptopNextPPTScreen').attr('src', '../Images/VideoPresentation/PV_5.png'); 
        
        //$('#VideoControlsDiv').show();
    }  
}

function LaptopPreviousSlide(){
    if(currPPTSlide == 1){
        $('#LaptopCurrentPPTScreen').attr('src', '../Images/VideoPresentation/LaptopSize/PV_1.png'); 
        $('#LaptopNextPPTScreen').attr('src', '../Images/VideoPresentation/PV_2.png'); 
    }  
    else if(currPPTSlide == 2){
        $('#LaptopCurrentPPTScreen').attr('src', '../Images/VideoPresentation/PV_2.png'); 
        $('#LaptopNextPPTScreen').attr('src', '../Images/VideoPresentation/PV_3.png'); 
    }
    else if(currPPTSlide == 3){
        $('#LaptopCurrentPPTScreen').attr('src', '../Images/VideoPresentation/PV_3.png'); 
        $('#LaptopNextPPTScreen').attr('src', '../Images/VideoPresentation/PV_4.png'); 
    } 
}

function LaptopChangePPT(){   
    if(currPPTDefault){
        $('#LaptopCurrentPPTScreen').attr('src', '../Images/VideoPresentation/PV_1.png'); 
        $('#LaptopNextPPTScreen').attr('src', '../Images/VideoPresentation/PV_2.png'); 
    }
    else{
        $('#LaptopCurrentPPTScreen').attr('src', '../Images/ChangePPT/PV_1.png'); 
        $('#LaptopNextPPTScreen').attr('src', '../Images/ChangePPT/PV_2.png'); 
    }
}

/* ---- END: LAPTOP */

/* ---- START: TV */

function TVNextPrevSlide(newValue){
    var name = '../Images/TVScreen/PV_' + (newValue + 1).toString() +'.png';

    console.log(name);

    var elements = document.getElementsByClassName("PPTPanelImage");

    for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].setAttribute('src', name); 
        if(currPPTSlide == 4){
            elements[i].hidden = true;
            $('.PPTPanelVideo').show();    
        }
        else{
            elements[i].hidden = false;
            $('.PPTPanelVideo').hide();
        }
    }
}

function TVVideoControls(){
    var myVideo = document.getElementById("PPTPanelVideo");

    if(myVideo == null){
        console.log("Video Not Found!");
        return;
    }

    if(currPPTImageLeap == 4){
        if (myVideo.paused){
            console.log("-- Play Video");
            myVideo.play(); 
        } 
        else {
            console.log("-- Pause Video");
            myVideo.pause();
        }
    }
}

function TVChangePPT(){ 
    if(currPPTDefault){
        $('.PPTPanelImage').attr('src', '../Images/TVScreen/PV_1.png'); 
    }
    else{
        $('.PPTPanelImage').attr('src', '../Images/Change/PV_1.png'); 
    }
}

/* ---- END: TV */

/* ---- START: MOBILE */

function MobileNextSlide(){   
    var myVideo = document.getElementById("PPTVideo");
    myVideo.pause();

    if(currPPTSlide == 0){
        $('#PresentationMobileImg').attr('src', '../Images/VideoPresentation/PV_2.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_3.png'); 

    }
    else if(currPPTSlide == 1){
        $('#PresentationMobileImg').attr('src', '../Images/VideoPresentation/PV_3.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_4.png'); 
    }  
    else if(currPPTSlide == 2){
        /*$('#PresentationMobileImg').attr('src', '../Images/VideoPresentation/PV_4.png');*/ 
        $('#PresentationMobileImg').hide(); 
        $('#PPTVideo').show(); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_5.png'); 
        
    }  
}

function MobilePreviousSlide(){
    var myVideo = document.getElementById("PPTVideo");
    myVideo.pause();

    if(currPPTSlide == 1){
        $('#PresentationMobileImg').attr('src', '../Images/VideoPresentation/PV_1.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_2.png'); 
    }  
    else if(currPPTSlide == 2){
        $('#PresentationMobileImg').attr('src', '../Images/VideoPresentation/PV_2.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_3.png'); 
    }
    else if(currPPTSlide == 3){
        $('#PresentationMobileImg').show();           
        $('#PPTVideo').hide(); 
        $('#PresentationMobileImg').attr('src', '../Images/VideoPresentation/PV_3.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_4.png'); 
    } 
}

function MobileChangePPT(){   
    if(currPPTDefault){
        $('#PresentationMobileImg').attr('src', '../Images/VideoPresentation/PV_1.png'); 
        $('#NextSlideImg').attr('src', '../Images/VideoPresentation/PV_2.png'); 
    }
    else{
        $('#PresentationMobileImg').attr('src', '../Images/ChangePPT/PV_1.png'); 
        $('#NextSlideImg').attr('src', '../Images/ChangePPT/PV_2.png'); 
    }
}

function MobileVideoControls(controlType){
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

/* ---- END: MOBILE */