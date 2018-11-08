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
});