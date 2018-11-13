$(document).ready(function(){

    $('#PresentationMobileBarBtn').click(function () {
        if ($(this).attr('src') == "../Images/Mobile/Bar/MobileBar_Presentation.png") {
            $(this).attr('src', '../Images/Mobile/Bar/MobileBar_PresentationSELECT.png'); 
        }
        else{
            $(this).attr('src', '../Images/Mobile/Bar/MobileBar_Presentation.png'); 
        }
    });
});