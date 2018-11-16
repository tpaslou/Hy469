$(document).ready(function(){
    var currPressedButton ="#MobileBarPresentationBtn"; 

    function UnPressAllLeftBarButtons(){
        $('#MobileBarPresentationBtn').attr('src', '../Images/Mobile/Bar/Presentation.png'); 
        $('#MobileBarChatBtn').attr('src', '../Images/Mobile/Bar/Chat.png'); 
        $('#MobileBarParticipantsBtn').attr('src', '../Images/Mobile/Bar/Participants.png'); 
        $('#MobileBarSettingsBtn').attr('src', '../Images/Mobile/Bar/Settings.png'); 
    }

    $('#MobileBarPresentationBtn').click(function () {
        UnPressAllLeftBarButtons();
        $(this).attr('src', '../Images/Mobile/Bar/PresentationPRESSED.png'); 
    });

    $('#MobileBarChatBtn').click(function () {
        UnPressAllLeftBarButtons();
        $(this).attr('src', '../Images/Mobile/Bar/ChatPRESSED.png'); 
    });

    $('#MobileBarParticipantsBtn').click(function () {
        UnPressAllLeftBarButtons();
        $(this).attr('src', '../Images/Mobile/Bar/ParticipantsPRESSED.png'); 
    });

    $('#MobileBarSettingsBtn').click(function () {
        UnPressAllLeftBarButtons();
        $(this).attr('src', '../Images/Mobile/Bar/SettingsPRESSED.png'); 
    });
    
});