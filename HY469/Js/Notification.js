$(document).ready(function(){
    /* Side Panel: Previous Button */
    $('#ExitBtn').click(function(){
        $('#ExitButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
        $('#AnnotationsNotification').hide();
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
});