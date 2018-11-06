$(document).ready(function(){

    /* Video Controls: Mute / Unmute Button*/
    $('#SwapButtonMute').click(function () {
        if ($('#MuteUnmuteBtn').attr('src') == "../Images/Buttons/Button_Mute.png") {
            $('#MuteUnmuteBtn').attr('src', '../Images/Buttons/Button_Unmute.png'); 
        }
        else{
            $('#MuteUnmuteBtn').attr('src', '../Images/Buttons/Button_Mute.png'); 
        }
  });
    
});