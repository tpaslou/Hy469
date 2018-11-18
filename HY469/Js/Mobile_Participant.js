$(document).ready(function(){
    var currPressedButton ="#MobileBarPresentationBtn"; 
    var isAnnotaionControlOpen = false;

    function UnPressAllLeftBarButtons(){
        $('#MobileBarPresentationBtn').attr('src', '../Images/Mobile/Bar/Presentation.png'); 
        $('#MobileBarChatBtn').attr('src', '../Images/Mobile/Bar/Chat.png'); 
        $('#MobileBarParticipantsBtn').attr('src', '../Images/Mobile/Bar/Participants.png'); 
        $('#MobileBarSettingsBtn').attr('src', '../Images/Mobile/Bar/Settings.png'); 
    }

    $('#MobileBarPresentationBtn').click(function () {
        if(currPressedButton == "#MobileBarPresentationBtn")
            return;
        UnPressAllLeftBarButtons();
        $(this).attr('src', '../Images/Mobile/Bar/PresentationPRESSED.png'); 
        currPressedButton ="#MobileBarPresentationBtn";
    });

    $('#MobileBarChatBtn').click(function () {
        if(currPressedButton == "#MobileBarChatBtn")
            return;
        UnPressAllLeftBarButtons();
        $(this).attr('src', '../Images/Mobile/Bar/ChatPRESSED.png'); 
        currPressedButton ="#MobileBarChatBtn";
    });

    $('#MobileBarParticipantsBtn').click(function () {
        if(currPressedButton == "#MobileBarParticipantsBtn")
            return;
        UnPressAllLeftBarButtons();
        $(this).attr('src', '../Images/Mobile/Bar/ParticipantsPRESSED.png'); 
        currPressedButton ="#MobileBarParticipantsBtn";
    });

    $('#MobileBarSettingsBtn').click(function () {
        if(currPressedButton == "#MobileBarSettingsBtn")
            return;
        UnPressAllLeftBarButtons();
        $(this).attr('src', '../Images/Mobile/Bar/SettingsPRESSED.png'); 
        currPressedButton ="#MobileBarSettingsBtn";
    });
    
    $('.topButtonHeader').click(function () {
        isAnnotaionControlOpen = !isAnnotaionControlOpen;
        if(isAnnotaionControlOpen)
            $('#SideAnnotationPanel').show();
        else
            $('#SideAnnotationPanel').hide();
        
    });
});