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
    $('#SettingsExitFileSystemBtn').click(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
        $('#MiddlePanelPresentationOptions').show();
        $('#MiddlePanelMoreOptionsSelectFile').hide();
    });

    $("#SettingsExitFileSystemBtn").mousedown(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Decline.png'); 
    });

    $("#SettingsExitFileSystemBtn").mouseleave(function(){
        $('#ExitFileSystemButtonImg').attr('src', '../Images/Notification/Button_Exit.png'); 
    });

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

    //-----------------Remote Users----------------
    $('#RemoteUserZikasButton').click(function(){
        $('#ParticipantOptionsNotification').show();
        $('#UserIconNoticicationButtonImg').attr('src', '../Images/Users/User_Paul.jpg'); 
        document.getElementById("RequestInfoTextNotification").innerHTML = 'Paul Zikas';
    });

    $('#RemoteUserSteveButton').click(function(){
        $('#UserIconNoticicationButtonImg').attr('src', '../Images/Users/User_Steve.jpg'); 
        document.getElementById("RequestInfoTextNotification").innerHTML = 'Steve Ens';
        $('#ParticipantOptionsNotification').show();
    });

    $('#RemoteUserStratosButton').click(function(){
        $('#UserIconNoticicationButtonImg').attr('src', '../Images/Users/User_Stratos.jpg'); 
        document.getElementById("RequestInfoTextNotification").innerHTML = 'Stratos W.';
        $('#ParticipantOptionsNotification').show();
    });
    //-----------------Settings Buttons----------------
    $('#MoreOptionsBtn').click(function(){
        $('#MiddlePanelPresentationOptions').hide();
        $('#MiddlePanelMoreOptionsParticipant').show();
    });
    
    $('#PresentationOptionsBtn').click(function(){
      $('#MiddlePanelPresentationOptions').show();
      $('#MiddlePanelMoreOptionsParticipant').hide();
    });
    
    $('#SettingsSelectPPTBtn').click(function(){
      $('#MiddlePanelMoreOptionsSelectFile').show();
      $('#MiddlePanelPresentationOptions').hide();
    });

    $('#LogOutBtn').click(function(){
        $('#MiddlePanelMoreOptionsSelectFile').show();
        $('#MiddlePanelPresentationOptions').hide();
      });

});