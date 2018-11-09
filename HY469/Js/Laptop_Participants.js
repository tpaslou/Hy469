$(document).ready(function(){

    /* Video Controls: Mute / Unmute Button */
    $('#SwapMuteBtn').click(function () {
        if ($('#MuteUnmuteImg').attr('src') == "../Images/Buttons/Button_Mute.png") {
            $('#MuteUnmuteImg').attr('src', '../Images/Buttons/Button_Unmute.png'); 
        }
        else{
            $('#MuteUnmuteImg').attr('src', '../Images/Buttons/Button_Mute.png'); 
        }
    });

    $('#NotesLaptopBtn').click(function () {
        $('.PerOptionsPanel').hide();
        $('.NotificationImage').hide();
        $('#NotificationLaptopPanel').hide();
        $('#TakeNotesLaptopPanel').show();
    });

    $('#AnnotationLaptopBtn').click(function () {
        /* hide all panels excpet the one pressed */
        $('.PerOptionsPanel').hide();
        $('#NotificationLaptopPanel').show();
        /* hide all notifications excpet the one pressed */
        $('.NotificationImage').hide();
        $('#AnnotationNotificationImg').show();
    });

    $('#PPTChangeLaptopBtn').click(function () {
        /* hide all panels excpet the one pressed */
        $('.PerOptionsPanel').hide();
        $('#NotificationLaptopPanel').show();
        /* hide all notifications excpet the one pressed */
        $('.NotificationImage').hide();
        $('#FileChangeNotificationImg').show();
    });

    $('#CoordRequestLaptopBtn').click(function () {
        /* hide all panels excpet the one pressed */
        $('.PerOptionsPanel').hide();
        $('#NotificationLaptopPanel').show();
        /* hide all notifications excpet the one pressed */
        $('.NotificationImage').hide();
        $('#CoordinatorNotificationImg').show();
    });

    $('#ExitNotificationBtn').click(function () {
        /* hide all panels excpet the one pressed */
        $('.PerOptionsPanel').hide();
        $('#AnnotationLaptopPanel').show();
        /* hide all notifications excpet the one pressed */
        $('.NotificationImage').hide();

    });

    $('#UserLaptopBtn').click(function () {
        $('.PerOptionsPanel').hide();
        $('#UserAccountLaptopPanel').show();

    });

    /* - USER BUTTON TWO STATES - */
    
    $('#SwapCameraLaptopBtn').click(function () {
        if ($(this).attr('src') == "../Images/Buttons/Camera.png") {
            $(this).attr('src', '../Images/Buttons/CameraOFF.png'); 
        }
        else{
            $(this).attr('src', '../Images/Buttons/Camera.png'); 
        }
    });

    $('#SwapMicLaptopBtn').click(function () {
        if ($(this).attr('src') == "../Images/Buttons/Mic.png") {
            $(this).attr('src', '../Images/Buttons/MicOFF.png'); 
        }
        else{
            $(this).attr('src', '../Images/Buttons/Mic.png'); 
        }
    });
});