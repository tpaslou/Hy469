$(document).ready(function() {

    


    


});





function openChat(ChatName,elmnt) {
    var i, tabcontent, tablinks;
    var color= "#383838";
  
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    
    elmnt.style.backgroundColor = color;

}


function openPrivateChat(elmnt){
    
  
  /*if(elmnt.id=="M3UserIcon 1"){
        $("#PChat2").hide();
        $("#PChat3").hide();
        $("#PChat").show();
    
      }else if (elmnt.id=="M3UserIcon 2"){
        $("#PChat").hide();
        $("#PChat3").hide();
        $("#PChat2").show();
      }else if (elmnt.id=="M3UserIcon 3"){
        $("#PChat").hide();
        $("#PChat2").hide();
        $("#PChat3").show();
      }*/
    color="#C8C8C8";

    if(elmnt.id!="M3UserIcon Add" ){
        tablinks = document.getElementsByClassName("M3UserIcon");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "transparent";
        }
        elmnt.style.backgroundColor = color;
      }


}