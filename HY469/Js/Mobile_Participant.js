$(document).ready(function(){
    var currPressedButton ="#MobileBarPresentationBtn"; 

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
        $('#ChatPanel').hide();
        $('#PresentationTabMobile').show();
    });

    $('#MobileBarChatBtn').click(function () {
        if(currPressedButton == "#MobileBarChatBtn")
            return;
        UnPressAllLeftBarButtons();
        $(this).attr('src', '../Images/Mobile/Bar/ChatPRESSED.png'); 
        currPressedButton ="#MobileBarChatBtn";

        $('#PresentationTabMobile').hide();
        $('#ChatPanel').show();
    });

    $('#MobileBarParticipantsBtn').click(function () {
        if(currPressedButton == "#MobileBarParticipantsBtn")
            return;
        UnPressAllLeftBarButtons();
        $(this).attr('src', '../Images/Mobile/Bar/ParticipantsPRESSED.png'); 
        currPressedButton ="#MobileBarParticipantsBtn";
        $('#ChatPanel').hide();
        $('#PresentationTabMobile').hide();
    });

    $('#MobileBarSettingsBtn').click(function () {
        if(currPressedButton == "#MobileBarSettingsBtn")
            return;
        UnPressAllLeftBarButtons();
        $(this).attr('src', '../Images/Mobile/Bar/SettingsPRESSED.png'); 
        currPressedButton ="#MobileBarSettingsBtn";
        $('#ChatPanel').hide();
        $('#PresentationTabMobile').hide();
    });
    
    $('.topButtonHeader').click(function () {
        $('.SideAnnotationPanel').toggle("slide");      
    });
});