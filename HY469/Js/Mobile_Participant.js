$(document).ready(function(){

    //here to connect with sockets
    if (GlobalConfig.ConnectToServer) {
        //Start sockets' connections
        Sockets.Connect();
      }

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
        $('#PeoplePanel').hide();
        $('#SettingsPanel').hide();

        $('#PresentationTabMobile').show();
    });

    $('#MobileBarChatBtn').click(function () {
        if(currPressedButton == "#MobileBarChatBtn")
            return;
        UnPressAllLeftBarButtons();
        $(this).attr('src', '../Images/Mobile/Bar/ChatPRESSED.png'); 
        currPressedButton ="#MobileBarChatBtn";
        $('#PeoplePanel').hide();
        $('#PresentationTabMobile').hide();
        $('#SettingsPanel').hide();

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
        $('#SettingsPanel').hide();
        $('#PeoplePanel').show();

    });

    $('#MobileBarSettingsBtn').click(function () {
        if(currPressedButton == "#MobileBarSettingsBtn")
            return;
        UnPressAllLeftBarButtons();
        $(this).attr('src', '../Images/Mobile/Bar/SettingsPRESSED.png'); 
        currPressedButton ="#MobileBarSettingsBtn";
        $('#ChatPanel').hide();
        $('#PeoplePanel').hide();

        $('#PresentationTabMobile').hide();
        $('#SettingsPanel').show();

    });
    
    $('.topButtonHeader').click(function () {
        $('.SideAnnotationPanel').toggle("slide");      
    });
});