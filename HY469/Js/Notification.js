$(document).ready(function(){
    /* Annotation Screen */
    $('#ExitBtn').click(function(){
        $('#ExitButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
        $('#AnnotationsNotification').hide();
        $('#ParticipantOptionsNotification').hide();
    });

    $("#ExitBtn").mousedown(function(){
        $('#ExitButtonImg').attr('src', '../Images/Notification/Button_Decline.png'); 
        $('.Notification').hide();
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

    // ALL ACCEPT DECLINE

    $('#NotificationAcceptBtn').click(function(){
        $('#AnnotationsNotification').hide();
        Http.SendHelloWorldMessage("Annotation");
        Http.SendHelloWorldMessage("HideParticipantPendingRequests");
    });

    $('#NotificationDeclineBtn').click(function(){
        $('#AnnotationsNotification').hide();
        Http.SendHelloWorldMessage("HideParticipantPendingRequests");
    });

    $('#JoinAcceptBtn').click(function(){
        $('#JoinNotification').hide();
        Http.SendHelloWorldMessage("ParticipantJoin");
        Http.SendHelloWorldMessage("HideParticipantPendingRequests");
    });

    $('#JoinDeclineBtn').click(function(){
        $('#JoinNotification').hide();
        Http.SendHelloWorldMessage("HideParticipantPendingRequests");
    });

    $('#RemoveUserBtn').click(function(){
        LastUserStatus(false);
        $('#ParticipantOptionsNotification').hide();
        Http.SendHelloWorldMessage("RemoveParticipant");
    });
    

});