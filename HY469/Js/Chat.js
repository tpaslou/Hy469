

$(document).ready(function() {

    document.getElementById("GroupChat").click();
    document.getElementById("M3UserIcon 1").click();
    
    $("#PChat2").hide();
    

    
    $(".tablink").click(function(e) {
      var id = e.target.id;
      console.log(id);
      if (id == "GroupChat") {
        $(".ChatTab_wrapper").css("top","10px");

        $("#PrivateChatPanel").hide();

        $("#Chat").show();
        $("#SendWrapper").show();
  
  
  
      } else if (id == "PrivateChat") {
  
        $("#Chat").hide();
        $("#SendWrapper").hide();
        $("#PrivateChatPanel").show();
       $(".ChatTab_wrapper").css("top","425px");
      }
  
      
    });
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
  
  console.log(elmnt.id);
  if(elmnt.id=="M3UserIcon 1"){
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
  }else if(elmnt.id=="M3UserIcon Add"){
    
    document.getElementById("partB").click();

  }

  color="#C8C8C8";
  if(elmnt.id!="M3UserIcon Add" ){
  tablinks = document.getElementsByClassName("M3UserIcon");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "transparent";
  }
  elmnt.style.backgroundColor = color;
}

} 