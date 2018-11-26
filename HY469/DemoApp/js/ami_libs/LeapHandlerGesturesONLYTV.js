/* ---------------------------------------------------- */
//Leap Motion communication 

if (!GlobalConfig.DebugMode) {

    var leapController = new Leap.Controller();

    var leftSwipeTimes = 0;
    var rightSwipeTimes = 0;
    var circleTimes = 0;

    var waitGestureUpdate = false;

    var currPPTImage = 1;


    var controller = Leap.loop({enableGestures: true}, function(frame){
        if(frame.valid && frame.gestures.length > 0){
          frame.gestures.forEach(function(gesture){
              switch (gesture.type){
                case "circle":
                    ++circleTimes;
                    break;
                case "swipe":
                    if(gesture.direction[0] > 0){
                        ++rightSwipeTimes;
                    } else {
                        ++leftSwipeTimes;
                    }
                    break;
              }
          });
        }

        if(!waitGestureUpdate)
        {
            if(rightSwipeTimes > 20){
                console.log("Swipe RIGHT");
                if(currPPTImage < 5)
                    ChangePPTImage(1);
                ResetValues();
            }
            else if(leftSwipeTimes > 20){
                console.log("Swipe LEFT");
                if(currPPTImage > 1)
                    ChangePPTImage(-1);
                ResetValues();
            }
            else if(circleTimes > 10){
                console.log("Circle");
                PlayPauseVideo();
                ResetValues();
            }
        }        
    });

}

function PlayPauseVideo(){
    var myVideo = document.getElementById("PPTPanelVideo");

    if(myVideo == null){
        console.log("Video Not Found!");
        return;
    }

    if(currPPTImage == 4){
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

function ChangePPTImage(newValue){
    currPPTImage += newValue;
    
    var name = '../Images/TVScreen/PV_' + currPPTImage.toString() +'.png';

    console.log(name);

    var elements = document.getElementsByClassName("PPTPanelImage");

    for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].setAttribute('src', name); 
        if(currPPTImage == 4){
            elements[i].hidden = true;
            $('.PPTPanelVideo').show();    
        }
        else{
            elements[i].hidden = false;
            $('.PPTPanelVideo').hide();
        }
    }
}

function ResetValues(){
    leftSwipeTimes = 0;
    rightSwipeTimes = 0;
    circleTimes = 0;

    waitGestureUpdate = true;
    setTimeout(function () { waitGestureUpdate = false; }, 2000);
}