$(document).ready(function(){
   
    $(".InputLogin").focus( function () {
        this.value = "";
    });

    $("#LoginBtn").click( function () {
        $('#LoginTxt').show();
        $('#LoginNameTxt').fadeIn(3000);
        $('#LoginPart2').show();
        $('#LoginPart1').hide();
    });

    $("#LogoutBtn").click( function () {
        $('#LoginPart1').show();
        $('#LoginPart2').hide();
    });

    $("#NewSessionBtn").click( function () {
        $('#LoginPart3').show();
        $('#LoginPart2').hide();
    });

    $("#BackToLoginBtn").click( function () {
        $('#LoginPart2').show();
        $('#LoginPart4').hide();
    });

    $("#SelectSessionBtn").click( function () {
        $('#LoginPart4').show();
        $('#LoginPart5').hide();
    });


});