$(document).ready(function(){

    //-----------------Notes----------------
    $('#ExitNotes').click(function(){
        $('#ExitNotesButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
        $('#MiddlePanelTakeNotes').hide();
    });

    $("#ExitNotes").mousedown(function(){
        $('#ExitNotesButtonImg').attr('src', '../Images/Notification/Button_Decline.png'); 
    });

    $("#ExitNotes").mouseleave(function(){
        $('#ExitNotesButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
    });

    //-----------------File System----------------
    $('#ExitFileSystemBtn').click(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
        $('#MiddlePanelMoreOptionsSelectFile').hide();
    });

    $("#ExitFileSystemBtn").mousedown(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Decline.png'); 
    });

    $("#ExitFileSystemBtn").mouseleave(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
    });

});