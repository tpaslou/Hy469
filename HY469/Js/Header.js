$(document).ready(function(){
    //here to connect with sockets
    if (GlobalConfig.ConnectToServer) {
        //Start sockets' connections
        Sockets.Connect();
      }
    
    $('#PlayPauseBtn').click(function () {
        Http.SendHelloWorldMessage("PlayPauseVideo");
        //VideoControls(0);
    });

    $('#SwapMuteBtn').click(function () {
        if ($('#MuteUnmuteImg').attr('src') == "../Images/Buttons/Button_Mute.png") {
            $('#MuteUnmuteImg').attr('src', '../Images/Buttons/Button_Unmute.png'); 
            Http.SendHelloWorldMessage("UnmuteVideo");
        }
        else{
            $('#MuteUnmuteImg').attr('src', '../Images/Buttons/Button_Mute.png'); 
            Http.SendHelloWorldMessage("MuteVideo");
        } 
        //VideoControls(1);
    });

    

    /* Side Panel: Previous Button */
    $('#PreviousBtn').click(function(){
        Http.SendHelloWorldMessage("PreviousSlide");
        //PreviousSlide();
    });

    /* Side Panel: Next Button */
    $('#NextBtn').click(function(){
        Http.SendHelloWorldMessage("NextSlide");
        //NextSlide();
    });

    

    //-------------Take Notes-------------------
    $('#TakeNotesBtn').click(function(){
        $('#NotesPanel').show();
        $('#MainPanel').hide();
        $('#ParticipantsPanel').hide();
        $('#SettingsPanel').hide();
        $('#FileSystemPanel').hide();
    });
    $('#ChangePPTBtn').click(function(){
        $('#FileSystemPanel').show();
        $('#MainPanel').hide();
        $('#ParticipantsPanel').hide();
        $('#SettingsPanel').hide();
        $('#NotesPanel').hide();
    });

        //-------------Take Notes-------------------
        $('#TakeAnnotationBtn').click(function(){
            Http.SendHelloWorldMessage("Annotation");
            //TakeAnnotation();
        });

        $('#ColorRedBtn').click(function(){
            Http.SendHelloWorldMessage("AnnotationRed");
        });

        $('#ColorGreenBtn').click(function(){
            Http.SendHelloWorldMessage("AnnotationGreen");
        });

        $('#ColorBlackBtn').click(function(){
            Http.SendHelloWorldMessage("AnnotationBlack");
        });

        // TEMP Placement for PPT change
        $('#PPTButton1').click(function(){
            Http.SendHelloWorldMessage("ChangePPTFile");
        });
    
});