$(document).ready(function(){
   
    $(".InputLogin").focus( function () {
        this.value = "";
    });

    $("#LoginBtn").focus( function () {
        $('#LoginPart2').show();
        $('#LoginPart1').hide();
    });

    $("#LogoutBtn").focus( function () {
        $('#LoginPart1').show();
        $('#LoginPart2').hide();
    });
});