function openPrivateChat(elmnt) {
    
    color="gray";
    tablinks = document.getElementsByClassName("M3UserIcon");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "transparent";
    }
    elmnt.style.backgroundColor=color;
    
    if (elmnt.id == "M3UserIcon 1") {
        $("#GChat").hide();
        $("#PChat2").hide();
        $("#PChat3").hide();
        $("#PChat").show();


    } else if (elmnt.id == "M3UserIcon 2") {
        $("#GChat").hide();
        $("#PChat").hide();
        $("#PChat3").hide();
        $("#PChat2").show();

    } else if (elmnt.id == "M3UserIcon 3") {
        $("#GChat").hide();
        $("#PChat").hide();
        $("#PChat2").hide();
        $("#PChat3").show();
    } else if (elmnt.id == "GChat Icon") {

        $("#PChat").hide();
        $("#PChat2").hide();
        $("#PChat3").hide();
        $("#GChat").show();
    }





}