$(document).ready(function(){
    /* Annotation Screen */
    $('#ExitBtn').click(function(){
        $('#ExitButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
        $('#AnnotationsNotification').hide();
        $('#ParticipantOptionsNotification').hide();
    });

    $('#AcceptBtn').click(function(){
        $('#AnnotationsNotification').hide();
    });

    $('#DeclineBtn').click(function(){
        $('#AnnotationsNotification').hide();
    });

    $("#ExitBtn").mousedown(function(){
        $('#ExitButtonImg').attr('src', '../Images/Notification/Button_Decline.png'); 
    });
    $("#ExitBtn").mouseleave(function(){
        $('#ExitButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
    });

    /* Coordinator - UserOptions Screen */
    $('#MuteUserBtn').click(function(){
        if ($('#MuteUserButtonImage').attr('src') == "../Images/Notification/Button_Mute.png") {
            $('#MuteUserButtonImage').attr('src', '../Images/Notification/Button_UnMute.png'); 
            document.getElementById("MuteTxt").innerHTML = 'Mute';
        }
        else{
            $('#MuteUserButtonImage').attr('src', '../Images/Notification/Button_Mute.png'); 
            document.getElementById("MuteTxt").innerHTML = 'UnMute';
        }
    });

    $('#ExitParticipantOptionsBtn').click(function(){
        $('#ExitParticipantOptionsButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
        $('#ParticipantOptionsNotification').hide();
    });

    $("#ExitParticipantOptionsBtn").mousedown(function(){
        $('#ExitParticipantOptionsButtonImg').attr('src', '../Images/Notification/Button_Decline.png'); 
    });
    $("#ExitParticipantOptionsBtn").mouseleave(function(){
        $('#ExitParticipantOptionsButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
    });

});