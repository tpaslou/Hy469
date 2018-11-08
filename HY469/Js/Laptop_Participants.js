$(document).ready(function(){

    /* Video Controls: Mute / Unmute Button */
    $('#SwapMuteBtn').click(function () {
        if ($('#MuteUnmuteImg').attr('src') == "../Images/Buttons/Button_Mute.png") {
            $('#MuteUnmuteImg').attr('src', '../Images/Buttons/Button_Unmute.png'); 
        }
        else{
            $('#MuteUnmuteImg').attr('src', '../Images/Buttons/Button_Mute.png'); 
        }
    });

    $('#AnnotationLaptopBtn').click(function () {
        $('.PerOptionsPanel').hide();
        $('#AnnotationLaptopPanel').show();
    });

    $('#NotesLaptopBtn').click(function () {
        $('.PerOptionsPanel').hide();
        $('#NotesLaptopPanel').show();
    });

    $('#CoordRequestLaptopBtn').click(function () {
        $('.PerOptionsPanel').hide();
        $('#RequestCoordPanel').show();
    });
    
});