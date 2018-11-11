$(document).ready(function(){

    /* -- NOTIFICATION PARTICIPANT -- */
    $('#RequestAnnotationBtn').click(function () {
        $('.Notification').hide();
        $('#AnnotationsNotification').show();
    });

    $('#AcceptAnnotationRequestBtn').click(function () {
        $('.Notification').hide();
        $('#AnnotationsNotification').show();
    });

    $('#RequestChangePPTBtn').click(function () {
        $('.Notification').hide();
        $('#PresentationNotification').show();
    });

    $('#ColorBlackBtn').click(function () {
        $('.Notification').hide();
        $('#AnnotationsIndirectNotification').show();
    });

    $('#ColorGreenBtn').click(function () {
        $('.Notification').hide();
        $('#AnnotationsIndirectNotification').show();
    });

    $('#ColorRedBtn').click(function () {
        $('.Notification').hide();
        $('#AnnotationsIndirectNotification').show();
    });

    $('.NotificationsExitButton').click(function(){
        $('#ExitButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
        $('.Notification').hide();
    });

    $(".NotificationsExitButton").mousedown(function(){
        $('#ExitButtonImg').attr('src', '../Images/Notification/Button_Decline.png'); 
    });
    $(".NotificationsExitButton").mouseleave(function(){
        $('#ExitButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
    });

    $("#CoordPrivBtn").click(function(){
        $('#CoordinatorPrivilegesNotification').show();
    });

});