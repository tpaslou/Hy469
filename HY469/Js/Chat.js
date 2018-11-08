

$(document).ready(function() {
    $(".tablink").click(function(e) {
      var id = e.target.id;
      console.log(id);
      if (id == "GroupChat") {
        $(".tab_wrapper").css("top","10px");

        $("#PrivateChatPanel").hide();

        $("#Chat").show();
        $("#SendWrapper").show();
  
  
  
      } else if (id == "PrivateChat") {
  
        $("#Chat").hide();
        $("#SendWrapper").hide();
        $("#PrivateChatPanel").show();
        $(".tab_wrapper").css("top","425px");
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