$(document).ready(function(){
   
    $(".InputLogin").focus( function () {
        this.value = "";
        $("#Keyboard").slideDown(600);
    });

    $("#LoginBtn").click( function () {
        $('#LoginTxt').show();
        $('#LoginNameTxt').fadeIn(3000);
        $('#LoginPart2').show();
        $('#LoginPart1').hide();
    });

    $("#SignUpBtn").click( function () {
        alert('Coord.ME: Page Not Found');
    });

    $("#LogoutBtn").click( function () {
        $('#LoginTxt').hide();
        $('#LoginNameTxt').hide();
        $('#LoginPart1').show();
        $('#LoginPart2').hide();
    });

    $("#NewSessionBtn").click( function () {
        $('#LoginPart3').show();
        $('#LoginPart2').hide();
    });

    $("#JoinNewSessionBtn").click( function () {
        $('#LoginPart6').show();
        $('#LoginPart2').hide();
    });

    $("#BackToLoginBtn").click( function () {
        $('#LoginPart2').show();
        $('#LoginPart4').hide();
    });

    $("#ExistingSessionBtn").click( function () {
        $('#LoginPart5').show();
        $('#LoginPart4').hide();
    }); 

    $("#SelectSessionBtn").click( function () {
        $('#LoginPart4').show();
        $('#LoginPart5').hide();
    });  

    /* FILE SYSTEM */
    function PPTSelected(){
        $('#LoginPart4').show();
        $('#LoginPart3').hide();
    }
    $("#PPTButton1").click( function () {
        PPTSelected();
    }); 
    $("#PPTButton2").click( function () {
        PPTSelected();
    }); 
    $("#PPTButton3").click( function () {
        PPTSelected();
    }); 
    $("#PPTButton4").click( function () {
        PPTSelected();
    }); 
    $("#PPTButton5").click( function () {
        PPTSelected();
    }); 
    $("#PPTButton6").click( function () {
        PPTSelected();
    }); 
    $("#PPTButton7").click( function () {
        PPTSelected();
    }); 
    $("#PPTButton8").click( function () {
        PPTSelected();
    }); 
    $("#PPTButton9").click( function () {
        PPTSelected();
    }); 
    
    
    $("#LoginExitFileSystemBtn").click( function () {
        $('#LoginPart2').show();
        $('#LoginPart3').hide();
    }); 
    

    //---------File System------------
    $('#LoginLocalFileSystemBtn').click(function(){
        $('#PPTFileSystemLocal').show();
        $('#PPTFileSystemDropbox').hide();
        $('#PPTFileSystemGoogleDrive').hide();
        $('#PPTFileSystemiCloud').hide();
      });
      $('#LoginDropBoxBtn').click(function(){
        $('#PPTFileSystemLocal').hide();
        $('#PPTFileSystemDropbox').show();
        $('#PPTFileSystemGoogleDrive').hide();
        $('#PPTFileSystemiCloud').hide();
      });
      $('#LoginGoogleDriveBtn').click(function(){
        $('#PPTFileSystemLocal').hide();
        $('#PPTFileSystemDropbox').hide();
        $('#PPTFileSystemGoogleDrive').show();
        $('#PPTFileSystemiCloud').hide();
      });
      $('#LoginiCloudBtn').click(function(){
        $('#PPTFileSystemLocal').hide();
        $('#PPTFileSystemDropbox').hide();
        $('#PPTFileSystemGoogleDrive').hide();
        $('#PPTFileSystemiCloud').show();
      });

});